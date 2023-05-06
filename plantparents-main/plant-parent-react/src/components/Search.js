import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {


  const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=4010864f116e74da9";
    script.async = true;

    document.body.appendChild(script);
  return (
    <>
<div class="search" className="gcse-search"></div>    
</>
  );
};

export default Search;
