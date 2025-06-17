//Connect.js

/**
 * @jest-environment jsdom
 */
 import { useEffect, useState } from "react";

 import Swal from 'sweetalert2';


 

  const Connect = () => {
    const [openModal, setModal] = useState(false);
    useEffect(() => {
        new Swal({
            title: 'Connect +',
            html: '<div><div><a href="mailto:sky@skysyzygy.xyz" target="_blank">Email</a></div><div><a href="mailto:sky@skysyzygy.xyz" target="_blank">Facebook</a></div><div><a href="mailto:sky@skysyzygy.xyz" target="_blank">Instagram</a></div><div><a href="mailto:sky@skysyzygy.xyz" target="_blank">Live Chat</a></div><div><a href="mailto:sky@skysyzygy.xyz" target="_blank">Add Inspiration</a></div></div>',
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
    }, []);
    const clickconnect = () => {
        new Swal({
            title: 'Connect +',
            html: '<div><div><a href="mailto:mail@gender.network" target="_blank">Email</a></div><div><a href="http://facebook.com/sky.syzygy" target="_blank">Facebook</a></div><div><a href="https://www.instagram.com/sky.syzygy/" target="_blank">Instagram</a></div></div>',
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
        <></>
    );
};
export default Connect