import React, { useContext, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NotificationContex } from "../../../../contex/NotificationContex";
import { Breadcrumb } from "../../components/Breadcrumb";
import MENU_LISTS from "../../constants/menuLists";

const AddCar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(false);
  const [empty, setEmty] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setNotif } = useContext(NotificationContex);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setEmty("");
    setError("");
  };

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
    setEmty("");
    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg"];
      const maxFileSize = 2 * 1024 * 1024;

      if (allowedTypes.includes(file.type) && file.size <= maxFileSize) {
        setImage(file);
      } else {
        if (!allowedTypes.includes(file.type)) {
          alert("Invalid file type. Please select a PNG or JPEG file.");
        } else {
          alert("file too large");
        }
      }
    }

    setEmty("");
    setError("");
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setEmty("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !image || !category) {
      setEmty("Semua Field Harus Terisi");
      return;
    }
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: `${token}`,
      },
    };

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("category", category);
      formData.append("status", status);
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/admin/car",
        formData,
        config
      );
      setNotif("Data Berhasil Disimpan");
      setTimeout(() => {
        setNotif("");
        window.location.reload();
      }, 3000);
      navigate("/admin/cars");
    } catch (error) {
      setError("Sepertinya Ada Kesalahan Di Server Kami");
      setTimeout(() => {
        setError("");
      }, 3000);
      setLoading(false);
    }
  };
  return (
    <MainLayout menu={MENU_LISTS[1]} menuTitle="List Car">
      <Breadcrumb
        currentLink="Add New Car"
        previousLink={["Cars", "List Car"]}
      />
      <p className="list-car2 mt-4">Add New Car</p>

      {/* form input */}
      <form action="" className="form">
        {empty && (
          <p className="notif-error" style={{ fontStyle: "italic" }}>
            {empty}
          </p>
        )}
        {error && (
          <p className="notif-error" style={{ fontStyle: "italic" }}>
            {error}
          </p>
        )}

        <div className="input-name">
          <p>
            Nama/Type Mobil <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Input Nama/Type Mobil"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-name">
          <p>
            Harga <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Input Harga Sewa mobil"
            name="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="input-foto">
          <p>
            Foto <span>*</span>
          </p>
          <div className="inner-foto">
            <input
              type="file"
              placeholder="Upload Foto Mobil"
              name="image"
              onChange={handleImageChange}
            />
            <p>File size max. 2MB</p>
          </div>
        </div>
        <div className="input-name">
          <p>
            Kategori <span>*</span>
          </p>
          <select
            name="category"
            id=""
            value={category}
            onChange={handleCategoryChange}>
            <option value="" disabled>
              Pilih Kategori Mobil
            </option>
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 orang</option>
          </select>
        </div>
      </form>

      <div className="tombol">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            <button
              className="button1"
              onClick={() => {
                navigate("/admin/cars");
              }}>
              Cancel
            </button>
            <button className="button2" onClick={handleSubmit}>
              Save
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default AddCar;
