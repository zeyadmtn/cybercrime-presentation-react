import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bg from '/bg.png';

function Page1View() {
    const location = useLocation();
    const item = location.state;
    const data = item?.page1Data;
    const navigate = useNavigate();
    const contentRef = useRef(null);

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const goToNextPage = (item) => {
        navigate('/strategy', { state: item });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Don't trigger navigate if modal is open
            if (selectedTestimonial) return;

            if (contentRef.current && !contentRef.current.contains(event.target)) {
                navigate(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigate, selectedTestimonial]);

    if (!data) return <div>No data found</div>;

    return (
        <main
            className="relative min-h-screen text-white bg-cover bg-center px-10 py-6"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
                <img src="/logo1.png" alt="Logo 1" className="h-auto w-full max-w-[20vw]" />
                <img src="/logo2.png" alt="Logo 2" className="h-auto w-full max-w-[20vw]" />
            </div>

            {/* Main Content */}
            <div
                id="content"
                ref={contentRef}
                className="flex flex-col max-w-[85dvw] mx-auto h-full"
            >
                {/* Title */}
                <h1 className="text-5xl font-semibold text-center mb-10">{data.title}</h1>

                {/* Testimonial View */}
                {data.hasVideoSliders ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {data.listItems.map((testimonial, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedTestimonial(testimonial)}
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4 text-white cursor-pointer hover:bg-opacity-20 transition"
                            >
                                <video
                                    src={testimonial.vidUrl}
                                    className="w-full h-52 object-cover rounded-md mb-4"
                                    muted
                                    autoPlay
                                    controls={false}
                                    playsInline
                                    loop
                                />
                                <p className="font-semibold text-lg">{testimonial.zeyadCountry}</p>
                                <p className="text-sm">
                                    <strong>Course:</strong> {testimonial.title}
                                </p>
                                <p className="text-sm">
                                    <strong>Date:</strong> {testimonial.date}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Default View
                    <div className={`flex flex-row gap-x-6 h-[60dvh] items-start ${!data.longDescription ? 'justify-center' : ''}`}>
                        {/* Left Video Column */}
                        <div className={`${!data.longDescription ? 'w-[80%]' : 'w-[65%]'} flex flex-col h-full gap-8 items-start`}>
                            <video
                                src={data.videoUrl}
                                controls={false}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={`rounded-lg shadow-lg object-contain ${!data.longDescription ? 'w-full h-[70vh]' : 'w-full'}`}
                            />
                        </div>

                        {/* Right Content Column */}
                        {data.longDescription && (
                            <div className="w-[35%] h-full flex flex-col gap-8 justify-between">
                                <p className="text-xl leading-relaxed">{data.longDescription}</p>

                                {data.listItems?.length > 0 && (
                                    <div className="w-full">
                                        <h2 className="text-2xl font-semibold mb-4">{data.listTitle}</h2>
                                        <ul className="text-lg grid-cols-2 grid w-full space-y-1 list-disc list-inside">
                                            {data.listItems.map((item, index) => (
                                                <li className="col-span-1" key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Button only if page2Data exists */}
                                {item?.page2Data && data.btnText && (
                                    <div
                                        onClick={() => goToNextPage(item)}
                                        className="flex items-center text-center gap-4 mt-auto group cursor-pointer"
                                    >
                                        <span className="text-3xl font-bold">{data.btnText}</span>
                                        <div className="w-full h-full max-w-[4vw] group-hover:scale-125 transition-all duration-300 ease-in-out">
                                            <svg fill="#ffffff" version="1.1" viewBox="0 0 512 512" stroke="#ffffff">
                                                <polygon points="512,261.5 298.7,90.8 298.7,218.8 0,218.8 0,304.2 298.7,304.2 298.7,432.2 "></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Modal Overlay */}
            {selectedTestimonial && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-center items-center text-center px-8">
                    <div className="max-w-4xl w-full">
                        <video
                            src={selectedTestimonial.vidUrl}
                            controls={false}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full max-h-[60vh] mb-8 rounded-lg shadow-xl"
                        />
                        <div className="text-left text-white space-y-2 mb-10">
                            <p className="text-xl font-semibold">{selectedTestimonial.zeyadCountry}</p>
                            <p className="text-lg">
                                <strong>Course:</strong> {selectedTestimonial.title}
                            </p>
                            <p className="text-lg">
                                <strong>Date:</strong> {selectedTestimonial.date}
                            </p>
                        </div>

                        {/* Close Modal Button */}
                        <div
                            onClick={() => setSelectedTestimonial(null)}
                            className="flex items-center justify-center gap-4 cursor-pointer hover:opacity-80 transition"
                        >
                            <span className="text-2xl font-bold">Return to Testimonials</span>
                            <svg fill="#ffffff" version="1.1" viewBox="0 0 512 512" stroke="#ffffff" className="w-8 h-8">
                                <polygon points="512,261.5 298.7,90.8 298.7,218.8 0,218.8 0,304.2 298.7,304.2 298.7,432.2 "></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Page1View;
