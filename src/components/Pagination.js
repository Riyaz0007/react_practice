import { useEffect, useState } from "react";
import '../styles/pagination.css'

function Pagination() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(2)
    const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const result = await res.json()
        if (result && result.products) {
            setData(result.products)
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    const handlePage = (selectedpage) => {
        if (selectedpage >= 1 && selectedpage <= data.length / 10 && selectedpage !== page) {
            setPage(selectedpage)
        }
    }
    return (
        <>
            {data.length > 0 && <div className="products">
                {
                    data.slice((page * 10 - 10), page * 10).map((item) => {
                        return <span className="card">
                            <img src={item.thumbnail} alt={item.title} />
                            <br />
                            <span className="title">{item.title}</span>
                        </span>
                    })
                }
            </div>}
            {data.length > 0 && <div className="pages-div">
                {page>=2 && <span className="prev-span" onClick={() => { handlePage(page - 1) }}>Previous</span>
                }                {
                    [...Array(data.length / 10)].map((_, i) => (
                        <span className={page === i + 1 ? "active" : "numbers"} key={i} onClick={() => { handlePage(i + 1) }}>{i + 1}</span>
                    ))
                }
                {page <= 9 && <span className="next-span" onClick={() => { handlePage(page + 1) }}>Next</span>
                }                </div>}

        </>
    )
}
export default Pagination;