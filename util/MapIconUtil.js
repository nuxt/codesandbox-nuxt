import Vue from 'vue'
import CarParkIcon from './CarParkIcon'
// create a constructor from a Vue component
const CarParkIconConstructor = Vue.extend(CarParkIcon)

export const getMarkerIcon = (active, dynamic, carPark, isOpen, free) => {
    const iconComponent = new CarParkIconConstructor({
        propsData: {
            active, dynamic, carPark, isOpen, free
        }
    });
    iconComponent.$mount();
    const iconDom = iconComponent.$el;
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.setAttribute("type", "text/css");
    style.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');";
    iconDom.appendChild(style);
    const iconString = new XMLSerializer().serializeToString(iconDom);
    console.log("HERE");
    return 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(iconString);
}
