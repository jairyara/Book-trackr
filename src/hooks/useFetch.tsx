import {useState, useEffect} from "react";

export const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [controller, setController] = useState<AbortController | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
        fetch(url, {signal: abortController.signal})
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Request cancelled by user");
                } else {
                    setError(err)
                }
            })
            .finally(() => setLoading(false))

        return () => abortController.abort();
    }, [url])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Request cancelled");
        }
    }

    return {data, loading, error, handleCancelRequest}
}