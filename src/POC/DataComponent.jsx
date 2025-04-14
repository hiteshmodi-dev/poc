import useFetch from './UseFetchCustomHook';

const FetchDataComponent = () => {
    const [data, isLoading] = useFetch(
        'https://dummyjson.com/products'
    );

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className='product-list'>
                    {data &&
                        data.products.map((item) => (
                            <div key={item.id} className='product-card'>
                                <img src={item.images[0]} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default FetchDataComponent;