import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from "@material-ui/core";

const CustomPagination = ({ setPage, numberOfPages=10 }) => {
  const theme = createTheme ({
      palette:{
          type:'dark'
      }
  }) 

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
  };
  return (
    <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:10,
    }}>
      <ThemeProvider theme={theme}>
        <Pagination
          count={numberOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color='primary'
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;