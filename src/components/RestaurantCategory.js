import ItemList from './ItemList';
import { useState, useRef, useEffect } from 'react';

const RestaurantCategory = ({ data, index, showIndex, setShowIndex }) => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    const handleClick = () => {
        setShowIndex(showIndex === index ? null : index);
    };

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(showIndex === index ? contentRef.current.scrollHeight : 0);
        }
    }, [showIndex, index]);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                    className="bg-orange-50 px-6 py-4 border-b border-orange-100 cursor-pointer hover:bg-orange-100 transition-colors duration-200" 
                    onClick={handleClick}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {data.title}
                        </h2>
                        <span className="text-orange-500 transition-transform duration-300 ease-in-out" 
                              style={{ transform: showIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div 
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ height: `${contentHeight}px` }}
                >
                    <div ref={contentRef}>
                        <ItemList items={data.itemCards} isCart={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;