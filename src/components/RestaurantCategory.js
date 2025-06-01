import ItemList from './ItemList';

const RestaurantCategory = ({data ,index, showIndex, setShowIndex}) =>{
    const showCategory =() => {
        setShowIndex(index);
    }
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-orange-50 px-6 py-4 border-b border-orange-100" onClick={showCategory}>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                           {data.title}
                        </h2>
                    </div>
                    {
                        showIndex == index && <ItemList itemCards = {data.itemCards}></ItemList>
                    }
                </div>
            </div>
    )
}

export default RestaurantCategory;