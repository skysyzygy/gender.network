//Connect.js

/**
 * @jest-environment jsdom
 */
 import React, { useState, useEffect } from "react";

 import Link from 'next/link'
 import { useRouter } from 'next/router'
 import Image from 'next/image'
 import Exit from '../public/Xmark.svg';
 import Head from 'next/head'
 import Swal from 'sweetalert2'
 import withReactContent from 'sweetalert2-react-content'


 

  const Connect = (props) => {
    const [openModal, setModal] = useState(false);

    console.log(props.emaillink)

    
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