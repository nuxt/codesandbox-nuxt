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
    const iconString = new XMLSerializer().serializeToString(iconDom);
    return 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(iconString);
}
