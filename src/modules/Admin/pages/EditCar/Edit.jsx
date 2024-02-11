import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout"
import axios from "axios";
import { NotificationContex } from "../../../../contex/NotificationContex";
import { Breadcrumb } from "../../components/Breadcrumb";
import MENU_LISTS from "../../constants/menuLists";
import { formatUpdatedAt } from "@/utils"

const Edit = () => {
  const [car, setCar] = useState({
    name: "",
    image: null,
    price: 0,
    category: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { setNotif } = useContext(NotificationContex);
  const navigate = useNavigate();
  const [empty, setEmty] = useState("")
  const [isDisable, setIsDisable] = useState(true)

  const handleNameChange = (e) => {
    setCar((data) => ({ ...data, name: e.target.value }));
    setError("");
    setEmty("")
  };

  const handlePriceChange = (e) => {
    setCar((data) => ({ ...data, price: e.target.value }));
    setError("");
    setEmty("")
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg"];
      const maxFileSize = 2 * 1024 * 1024;

      if (allowedTypes.includes(file.type) && file.size <= maxFileSize) {
        setCar((data) => ({ ...data, image: file }));
        setIsDisable(false)
      } else {
        if (!allowedTypes.includes(file.type)) {
          alert("Invalid file type. Please select a PNG or JPEG file.");
        } else {
          alert("file too large");
        }
      }
    }
    setError("");
    setEmty("")
  };

  const handleCategoryChange = (e) => {
    setCar((data) => ({ ...data, category: e.target.value }));
    setError("");
    setEmty("")
  };

  const param = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: `${token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/car/${param.id}`,
        config
      );

      setCar(response.data);
    } catch (error) {
      alert("Ada Masalah di sisi server")
    }
  };

  const handleEdit = async () => {
    if (!car.name || !car.price || !car.image || !car.category) {
      setEmty("semua field harus terisi");
      return;
    }
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: `${token}`,
      },
    };
    try {
      const formData = new FormData();
      formData.append("name", car.name);
      formData.append("price", car.price);

      formData.append("image", car.image);

      formData.append("category", car.category);
      formData.append("status", car.status);
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/admin/car/${param.id}`,
        formData,
        config
      );
      setNotif("Data Berhasil Di Update");
      setTimeout(() => {
        setNotif("");
        window.location.reload();
      }, 3000);
      navigate("/admin/cars");
    } catch (error) {
      setError("sepertinya ada kesalahan di server kami");
      setTimeout(() => {
        setError("");
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <MainLayout menu={MENU_LISTS[1]} menuTitle="List Car">
      <Breadcrumb currentLink="Edit Car" previousLink={['Cars', 'List Car']} />
      <p className="list-car2 mt-4">Edit Car</p>

      {/* form input */}
      <form action="" className="form">
        {error && <p className=" notif-error">{error}</p>}
        {empty && <p className="notif-error">{empty}</p>}
        <div className="input-name">
          <p>
            Nama/Type Mobil <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Input Nama/Type Mobil"
            name="name"
            onChange={handleNameChange}
            value={car.name}
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
            onChange={handlePriceChange}
            value={car.price}
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
            value={car.category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Pilih Kategori Mobil
            </option>
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 orang</option>
          </select>
        </div>
        <div className="input-name">
          <p>
            Created at <span></span>
          </p>
          <p className="">{formatUpdatedAt(car.createdAt, false)}</p>
        </div>
        <div className="input-name">
          <p>
            Updated at <span></span>
          </p>
          <p className="">{formatUpdatedAt(car.updatedAt, false)}</p>
        </div>
      </form>

      <div className="tombol">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <button
              className="button1"
              onClick={() => {
                navigate("/admin/cars");
              }}
            >
              Cancel
            </button>
            <button className="button2" onClick={handleEdit} disabled={isDisable} style={{ backgroundColor: isDisable ? '#CCCCCC' : '#0d28a6' }}>
              Save
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Edit;
