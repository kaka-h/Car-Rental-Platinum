import React from "react";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./style.css";
import calendar from "../../assets/icon/fi_calendar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  disableButton,
  enableButton,
  resetDateRent,
  saveDateRent,
} from "../../features/detail/detailSlice";

const Calendars = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dayDiff, setDayDiff] = useState();
  const dispatch = useDispatch();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const options2 = { year: "numeric", month: "numeric", day: "numeric" };

  const { is_disabled } = useSelector((state) => state.detail);
  const state = useSelector((state) => state.detail);
  const [pickDate, setPickDate] = useState(false);

  const handleReset = () => {
    setPickDate(false);
    setDateRange([null, null]);
    setDayDiff(null);
    dispatch(resetDateRent());
    dispatch(disableButton());
  };

  const handleGetDateRent = () => {
    if (startDate && endDate) {
      const payload = {
        start_date: startDate.toLocaleString("en-UK", options),
        end_date: endDate.toLocaleDateString("en-UK", options),
        start_rent_at: startDate.toLocaleDateString("en-CA", options2),
        finish_rent_at: endDate.toLocaleDateString("en-CA", options2),
        day_rent: dayDiff,
      };
      dispatch(saveDateRent(payload));
      dispatch(enableButton());
    }
  };

  const handleOpenCloseCalendar = () => {
    setPickDate(true);
    if (startDate && endDate) {
      setPickDate(!pickDate);
    }
  };

  const dateToday = new Date();

  // const state = useSelector((state) => state.detail);
  useEffect(() => {
    handleGetDateRent();
    if (dayDiff > 7) {
      alert("Maksimal 7 hari");
      setDateRange([null, null]);
      setDayDiff(null);
      dispatch(resetDateRent());
      dispatch(disableButton());
    } else if (startDate && endDate) {
      const diff = endDate.getTime() - startDate.getTime();
      setDayDiff(diff / (1000 * 60 * 60 * 24));
    }

  }, [dayDiff, startDate, endDate, dateRange]);

  return (
    <div className="calendar">
      <div onClick={handleOpenCloseCalendar}>
        <ReactDatePicker
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
          placeholderText={
            !state.end_date
              ? "Pilih tanggal awal dan akhir sewa"
              : `${state.start_date} - ${state.end_date}`
          }
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          minDate={dateToday}
          shouldCloseOnSelect={false}
          open={pickDate}
          dateFormat={"d MMM yyyy"}
          onChange={(update) => {
            setDateRange(update);
          }}>
          <button
            disabled={startDate && endDate ? false : true}
            className={startDate && endDate ? "pick-date" : " disabled-button"}
            onClick={handleOpenCloseCalendar}>
            Pilih Tanggal
          </button>
        </ReactDatePicker>
      </div>
      <FontAwesomeIcon
        className={is_disabled ? "show-close" : "hide-close"}
        onClick={handleReset}
        icon={faXmark}
      />
      <img src={calendar} alt="" className="img" />
    </div>
  );
};

export default Calendars;
