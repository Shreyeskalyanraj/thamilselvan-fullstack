import { Suspense } from "react";
import PropTypes from 'prop-types';
import loadingImage from '/src/assets/images/gif.jpeg'; 
import '/src/assets/css/LazyLayout.css';

const LazyLayout = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={<div className="suspense-fallback"><img src={loadingImage} alt="Loading..." /></div>}>
            <Component {...rest} />
        </Suspense>
    );
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout