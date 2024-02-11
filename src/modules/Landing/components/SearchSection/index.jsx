import "./style.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import * as requestAPI from "../../api/api";

const SearchSection = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [status, setStatus] = useState();
  const [isSubmit, setSubmit] = useState(false);
  const [slicey, setSlicey] = useState({
    a: 0,
    b: 3,
  });
  const listcarnew = list.slice(slicey.a, slicey.b);

  const [hide, setHide] = useState(false);
  const { id } = useParams();

  const HideElement = () => {
    if (id) {
      setHide(true);
    }
  };

  useEffect(() => {
    handleGetList();
    HideElement();
  }, [isSubmit]);

  const handlePrev = (a, b) => {
    setSlicey({
      a: (a -= 3),
      b: (b -= 3),
    });
  };

  const handleNext = (a, b) => {
    setSlicey({
      a: (a += 3),
      b: (b += 3),
    });
  };

  const handleGetList = async () => {
    try {
      const res = await requestAPI.listCar(
        name,
        category,
        minPrice,
        maxPrice,
        status
      );
      setList(res.data.cars);
    } catch (error) {
      alert("Terjadi Kesalahan di sisi Server!")
    }
  };

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrice = (e) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);

    if (selectedValue === "option1") {
      setMinPrice(0);
      setMaxPrice(400000);
    } else if (selectedValue === "option2") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (selectedValue === "option3") {
      setMinPrice(600000);
      setMaxPrice(999999);
    } else {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    handleGetList();
    setSubmit(true);
    setName(name);
    setCategory(category);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setStatus(status);
    // alert("a");
  };

  const handleEdit = () => {
    handleGetList();
    setSelected("");
    setSubmit(false);
    setName("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setStatus("");
    // alert("b");
  };

  const handleChangeSubmit = () => {
    closeModal();
    if (isSubmit == false) {
      setSubmit(true);
      handleSubmit();
    } else if (isSubmit == true) {
      setSubmit(false);
      handleEdit();
    }
  };

  const showModal = () => {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.zIndex = 1000;
  };

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == myModal) {
      document.body.style.overflow = "auto";
      myModal.style.display = "none";
    }
  };

  return (
    <div className={!hide ? "rectangle" : "rectangle no-margin"}>
      <div className="container header-rectangle">
        <div className="rectangle-wrapper">
          <div className="rectangle-text-box">
            <p className="rectangle-p1">Nama Mobil</p>
            <input
              disabled={!hide ? false : true}
              onClick={showModal}
              onChange={handleSearch}
              value={name}
              className={
                !hide ? "rectangle-text" : "rectangle-text disabled-input"
              }
              type="text"
              placeholder={!hide ? "Ketik nama / tipe mobil" : ""}
            />
          </div>
          <div>
            <p className="rectangle-p2">Kategori</p>
            <select
              disabled={!hide ? false : true}
              onClick={showModal}
              className={
                !hide ? "rectangle-div" : "rectangle-div disabled-input"
              }
              name=""
              id=""
              onChange={handleCategory}
              value={category}>
              <option value="">{!hide ? "Masukan Kapasitas Mobil" : ""}</option>
              <option value={"small"}>2 - 4 Orang</option>
              <option value={"medium"}>4 - 6 Orang</option>
              <option value={"large"}>6 - 8 Orang</option>
            </select>
          </div>
          <div>
            <p className="rectangle-p2">Harga</p>
            <select
              disabled={!hide ? false : true}
              value={selected}
              onClick={showModal}
              className={
                !hide ? "rectangle-div" : "rectangle-div disabled-input"
              }
              name=""
              id=""
              onChange={handlePrice}>
              <option value="">
                {!hide ? "Masukan Harga Sewa per Hari" : ""}
              </option>
              <option value="option1">&lt; Rp. 400.000</option>
              <option value="option2">Rp.400.000 - Rp.600.000</option>
              <option value="option3">&gt; Rp. 600.000</option>
            </select>
          </div>
          <div>
            <p className="rectangle-p2">Status</p>
            <select
              disabled={!hide ? false : true}
              onClick={showModal}
              className={
                !hide ? "rectangle-div" : "rectangle-div disabled-input"
              }
              name=""
              id=""
              onChange={handleStatus}
              value={status}>
              <option value="">{!hide ? "Status" : ""}</option>
              <option value="true">Disewa</option>
              <option value="false">Belum Disewa</option>
            </select>
          </div>
          <div className={!hide ? null : "hide-element"}>
            {isSubmit ? (
              <button className="rectangle-btn" onClick={handleChangeSubmit}>
                Edit
              </button>
            ) : (
              <button className="rectangle-btn" onClick={handleChangeSubmit}>
                Cari Mobil
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={!hide ? "listcar-wrapper" : "listcar-wrapper hide-element"}>
        <div className="listcar">
          {listcarnew.length ? (
            listcarnew.map((car, id) => (
              <div key={id}>
                <div className="listcar-card">
                  <img
                    className="listcar-img"
                    src={car.image || 'https://placeholder.com/280x200 '}
                    alt={car.name}
                    onError={(e) => {
                      e.target.src = 'https://placeholder.com/280x200 ';
                    }}
                  />
                  <p className="namecar">{car.name}</p>
                  <p className="listcar-price">{`Rp. ${car.price} / hari`}</p>
                  <p className="listcar-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis vel eos vero reiciendis ad cum odio, accusantium
                    sunt.
                  </p>
                  <Link
                    className="text-decoration-none"
                    to={`/detail/${car.id}`}>
                    <button className="listcar-btn">Pilih Mobil</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h4>Maaf, Mobil tidak tersedia. Silahkan cari mobil yang lain.</h4>
          )}
        </div>
      </div>
      <div className="page">
        <div className={!hide ? "pagination" : " hide-element"} id="pagination">
          <button
            disabled={!slicey.a ? true : false}
            onClick={() => handlePrev(slicey.a, slicey.b)}>
            &lt;
          </button>
          <button
            disabled={listcarnew.length < 3 ? true : false}
            onClick={() => handleNext(slicey.a, slicey.b)}>
            &gt;
          </button>
        </div>
      </div>
      <div id="myModal" className={!hide ? "modal" : "hide-element"}></div>
    </div>
  );
};

export default SearchSection;
