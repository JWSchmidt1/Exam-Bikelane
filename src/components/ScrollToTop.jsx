import { BsArrowUpShort } from "react-icons/bs";

const ScrollToTop = () => {
    const goToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth",
        } );
    };
    return (
        <>
            <div className="top-to-btm" onClick={ goToTop }>
                <BsArrowUpShort
                    className="icon-style"
                />
            </div>
        </>
    );
};
export default ScrollToTop;