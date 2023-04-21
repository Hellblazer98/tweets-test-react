import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";


const Tweets = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Welcome...</h1>
            {isLoading ? <p>Loading...</p>
                : error ? <p>{error}</p>
                    : <div />}
        </div>


    )
};

export default Tweets;