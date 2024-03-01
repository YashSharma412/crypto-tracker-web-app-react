import React from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css"
export default function PaginationNav({page, handlePageChange}) {

  return (
    <div className="pagination_cont">
      <Pagination
        count={10}
        page={page}
        variant="outlined"
        onChange={(e,v)=>handlePageChange(e,v)}
        color="secondary"
        sx={{
          color: "var(--white) !important",
          "& .Mui-selected" : {
            backgroundColor: "var(--purple-lighter) !important",
            color: "#fff !important",
            borderColor: "var(--purple) !important"
          },
          "& .MuiPaginationItem-ellipsis":{
            color: "var(--white) !important",
            border: "0px solid var(--grey) !important",
            fontWeight: "bold"
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "2px solid var(--grey) !important",
            fontWeight: "bold"
          },
          "& .MuiPaginationItem-root ":{
            color: "var(--white)!important",
            border: "1px solid var(--grey)"
          }
        }}
      />
    </div>
  );
}
