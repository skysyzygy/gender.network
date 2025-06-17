//Connect.js

/**
 * @jest-environment jsdom
 */
 import { useState } from "react";

 import Swal from 'sweetalert2';


 

  const Connect = (props) => {
    const [openModal, setModal] = useState(false);


    
    const clickconnect = () => {
        new Swal({
            title: 'Connect +',
            
            html: "<div><div><a href=" + props.emaillink + ">Email</a></div> <div><a href=" + props.facebooklink + " target='_blank'>Facebook</a></div> <div><a href=" + props.iglink + " target='_blank'>Instagram</a></div>  </div>",
            allowOutsideClick: true,
            position: 'bottom-end',
            background: '#f4f467',
            confirmButtonText: '&times;',
            confirmButtonColor: '#f4f467',
            backdrop: true,
            customClass: {
                actions: 'exit',
            },
            showClass:{
                popup: 'animate__animated animate__slideInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__slideInLeft'
              }
            },
  
               );
    };
    return (
        <div className="connectBtn" onClick={clickconnect}>
            Connect +
       </div>
    );
};
export default Connect