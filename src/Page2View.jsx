import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bg from '/bg.png';

function Page2View() {
    const location = useLocation();
    const navigate = useNavigate();
    const contentRef = useRef(null);

    const item = location.state;
    const data = item?.page2Data;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                navigate(-1); // Go back
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigate]);

    if (!data) return <div>No data found</div>;

    return (
        <main
            className="min-h-screen text-white bg-cover bg-center px-10 py-6 overflow-hidden"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex justify-between items-center mb-10">
                <img src="/logo1.png" alt="Logo 1" className="h-auto w-full max-w-[20vw]" />
                <img src="/logo2.png" alt="Logo 2" className="h-auto w-full max-w-[20vw]" />
            </div>

            {/* Content */}
            <div
                id="content"
                ref={contentRef}
                className="flex flex-col max-w-[60dvw] mx-auto w-fit rounded-lg "
            >
                <h1 className="text-5xl font-semibold text-center mb-16">{item.title}</h1>
                <h2 className="text-4xl font-semibold text-center mb-10">{data.title}</h2>
                <img
                    src={data.imgUrl}
                    alt=""
                    className="max-h-[60dvh] w-fit object-contain mx-auto"
                />
            </div>
        </main>
    );
}

export default Page2View;
