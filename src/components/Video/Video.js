import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function Video() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        fetch("/video")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setVideoList(result);
                },
                (error) => {
                    isLoaded(true);
                    setError(error);
                }
            )
    }, []);


    if (error){
        return <div> ERROR !!!!!! </div>;
    }else if (!isLoaded){
        return <div> LOADING ... </div>;
    }else {
        return(
            <ul>
                {videoList.map(video=>(
                    <li>
                        {video.title} {video.text}
                    </li>
                ))}
            </ul>
        );
    }
}
export default Video;