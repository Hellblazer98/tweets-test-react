import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Filter } from "../Components/Filter/Filter";
import { TweetsList } from "../Components/TweetsList/TweetsList";
import { fetchUsers } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { HiArrowLeft } from "react-icons/hi";
import { GoBackLink, TweetsContainer } from "../Components/SharedLayout/SharedLayout.styled";
import { Loader } from "../Components/Loader/Loader";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Tweets = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const goBack = useRef(location.state?.from ?? "/");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Tweets</title>
            </Helmet>
            <TweetsContainer>
                <GoBackLink to={goBack.current}><HiArrowLeft size='12' />Go Back</GoBackLink>
                <Filter />
                {isLoading ? <Loader />
                    : error ? <p>{error}</p>
                        : <TweetsList />}
            </TweetsContainer>
        </HelmetProvider>
            


    )
};

export default Tweets;