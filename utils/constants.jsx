
export const DEFAULT_LAT = "21.1458004";
export const DEFAULT_LNG = "79.0881546";


export const CITY_COORDINATES_API = "https://api.api-ninjas.com/v1/geocoding?city=";

export const CITY_RESTAURANTS_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${DEFAULT_LAT}&lng=${DEFAULT_LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

export const RESTAURANT_MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${DEFAULT_LAT}&lng=${DEFAULT_LNG}&restaurantId=`;

export const WOYM_ICONS_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";