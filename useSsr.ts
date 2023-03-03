function useSsr() {
  const isDOM =
  //get ID from client!
    typeof window !== 'undefined' && window.document.documentElement && window.document 
    

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  }
}

export default useSsr
