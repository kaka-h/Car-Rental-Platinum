import React, { useState, useEffect, useMemo } from 'react';
import PrevIcon from "@/modules/Admin/assets/icons/fi_chevrons-left.svg?react";
import NextIcon from "@/modules/Admin/assets/icons/fi_chevrons-right.svg?react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import moment from 'moment/moment';
import axios from 'axios';
import "./style.scss";
import { formatToIdr } from "@/utils/";

const TableData = () => {
    const [data, setData] = useState([]);
    const [options, setOptions] = useState({
        pageSize: 10,
        currentPage: 1
    });
    const [totalRecords, setTotalRecords] = useState(0);

    const columns = useMemo(
        () => [
            { field: 'no', header: 'No' },
            { field: 'useremail', header: 'User Email' },
            { field: 'car', header: 'Car' },
            { field: 'start_rent_at', header: 'Start Rent' },
            { field: 'finish_rent_at', header: 'Finish Rent' },
            { field: 'total_price', header: 'Total Price' },
            { field: 'Category', header: 'Category' },
        ],
        []
    );

    useEffect(() => {
        getTable();
    }, [options]);

    const getTable = async () => {
        try {
            const token = localStorage.getItem("token");
            const params = {
                page: options.currentPage,
                pageSize: options.pageSize
            };
            const response = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/order", {
                params: params,
                headers: {
                    access_token: `${token}`
                }
            });
            setData(response.data.orders.map((data, i) => ({
                no: i + 1,
                useremail: data.User.email,
                car: "Car",
                start_rent_at: moment(data.start_rent_at).format("DD-MM-YYYY"),
                finish_rent_at: moment(data.finish_rent_at).format("DD-MM-YYYY"),
                total_price: formatToIdr(data.total_price),
                Category: "Category"
            })));
            setTotalRecords(response.data.count);
        } catch (error) {
            alert('Terjadi kesalahan pada server');
        }
    };

    const paginationNumberButton = () => {
        const totalPages = Math.ceil(totalRecords / options.pageSize);
        const visiblePageRange = 3;

        const startPage = Math.max(1, options.currentPage - Math.floor(visiblePageRange / 2));
        const endPage = Math.min(startPage + visiblePageRange - 1, totalPages);

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const pageNumber = startPage + index;
            if (pageNumber === totalPages) return null;

            return (
                <button
                    className='number'
                    key={pageNumber}
                    onClick={() => handlePagination(pageNumber)}
                    disabled={options.currentPage === pageNumber}
                >
                    {pageNumber}
                </button>
            );
        });
    };

    const handlePagination = (page) => {
        setOptions({
            ...options,
            currentPage: page
        });
    };

    return (
        <>
            <DataTable value={data}>
                {columns.map((column) => (
                    <Column field={column.field} header={column.header} key={column.field} sortable />
                ))}
            </DataTable>
            <div className="table-footer">
                <div className="input-groups">
                    <div className="input">
                        <p>Limit</p>
                        <select value={options.pageSize} onChange={(e) => setOptions({ ...options, pageSize: Number(e.target.value) })} >
                            <option value="10">10</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="input">
                        <p>Jump to page</p>
                        <select onChange={(e) => setOptions({ ...options, currentPage: Number(e.target.value) })} value={options.currentPage}>
                            {Array.from({ length: Math.ceil(totalRecords / options.pageSize) }, (_, i) => i + 1).map((page) => <option key={page} value={page}>{page}</option>)}
                        </select>
                        <button onClick={() => getTable()}>Go</button>
                    </div>
                </div>
                <div className="table-pagination">
                    <button
                        disabled={options.currentPage === 1}
                        onClick={() => handlePagination(options.currentPage - 1)}
                    >
                        <PrevIcon />
                    </button>
                    {paginationNumberButton()}
                    {options.currentPage >= Math.ceil(totalRecords / options.pageSize) - 2 ? null : <button>...</button>}
                    <button
                        className='number'
                        disabled={options.currentPage === Math.ceil(totalRecords / options.pageSize)}
                        onClick={() => handlePagination(Math.ceil(totalRecords / options.pageSize))}>{Math.ceil(totalRecords / options.pageSize)}</button>
                    <button
                        disabled={options.currentPage === Math.ceil(totalRecords / options.pageSize)}
                        onClick={() => handlePagination(options.currentPage + 1)}
                    >
                        <NextIcon />
                    </button>

                </div>
            </div>
        </>
    );
};

export default TableData;
