const apiAparts = () => {
    /**
     * Get the data from the Json
     * @returns {Promise}
     */
    const getAparts = async () => {
      return fetch("/datas/logements.json", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    /**
     *  Get the data from the Json and return the data from one apart with the id, or error if is not ok.
     * @param {string} apartId
     * @returns {object}  object represents the data for one apart from the json
     */
    const getApart = async (apartId) => {
      let aparts = await getAparts();
      let res = await aparts.find((apart) => apart.id === apartId);
      if (!res) throw new Error("pas d' appart");
      return res;
    };
  
    return {
      getAparts,
      getApart,
    };
  };
  export default apiAparts();