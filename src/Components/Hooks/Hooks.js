import React, {useState, useEffect, useCallback, useMemo} from 'react'

const Hooks = () => {
    const [counter, increment, decrement] = useCounter(1);
    const [visible] = useTempMessage(6000);
    const message = <span>Temp message</span>;
    return (
        <div>
            <h3>{ counter }</h3>
            <p>{ visible && message }</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <PlanetInfo id = {counter}/>
        </div>
    )
};

const useCounter = ( initState ) => {
    const [counter, setCounter] = useState(initState);
    const increment = () => {
        setCounter(state => state + 1)
    };
    const decrement = () => {
        setCounter(state => state - 1)
    };
    return [ counter, increment, decrement ]
};

const useTempMessage = (time) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {const hide = setTimeout(() =>
            setVisible(false),
        time);
        return () => clearTimeout(hide)
    }, [time]);
    return [visible]
};

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request)
};

const useRequest = (request) => {
    const initState = useMemo(() => ({
        data : null,
        loading : true,
        error : null
    }), []);
    const [dataState, setDataState] = useState(initState);
    let cancelled = false;
    useEffect(() => {
        setDataState(initState);
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading : false,
                error : false
            }))
            .catch(error => !cancelled && setDataState({
                data : null,
                loading : false,
                error
            }));
        return () => cancelled = true;
    }, [request, initState]);
    return dataState
};

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => data);
};

const PlanetInfo = ( {id} ) => {
    const {data, loading, error} = usePlanetInfo(id);
    if (loading) return <span>Loading...</span>;
    if (error) return <span>Error : {error}</span>;
    return(
        <div>
            <p>{id} --- {data.name}</p>
        </div>
    )
};

export default Hooks