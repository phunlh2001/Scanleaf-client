import React, { useEffect, useState } from "react";
import HomeCard from "../Cards";
import Paginate from "../Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../../redux/actions/ProductAction";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.Product);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const prodPerPage = 20;
  const totalProducts = productList?.length;

  const indexOfLastProd = currentPage * prodPerPage;
  const indexOfFirstProd = indexOfLastProd - prodPerPage;
  const filterProduct = productList?.slice(indexOfFirstProd, indexOfLastProd);

  const navigate = useNavigate();

  return (
    <div className="home">
      <Button
        color="danger"
        onClick={() => navigate("/scan-photos")}
        className="my-4"
      >
        Start Scanning
      </Button>
      <div className="uderline"></div>

      <div className="container">
        <div className="cards">
          {/* check productList and map() */}
          {filterProduct?.map((prod, index) => (
            <HomeCard product={prod} key={index} />
          ))}
        </div>
        {totalProducts > prodPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProduct={totalProducts}
            prodPerPage={prodPerPage}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
