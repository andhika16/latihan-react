import {useEffect,useState} from 'react';
const UseFetch = (url) => {
  const [data, setData] = useState([]) 
  const [isPending, setPending] = useState(true);
  const [isError, setError] = useState(null);
  
  useEffect(() => {
    const abortCont = new AbortController()
  
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if(!res.ok) {
            throw Error('data not found')
        }
        return res.json()
        })
        .then(data => {
          setPending(false)
          setError(null)
          setData(data)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setPending(false)
            setError(err.message)
          }
        })
 
    
    return () => abortCont.abort()
},[url])

    return {data,isPending, isError}
}

export default UseFetch;