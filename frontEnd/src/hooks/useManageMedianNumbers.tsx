import { useQueryClient } from "@tanstack/react-query";
import { fetchMedianNumbers } from "../api/medianNumberApi";
import { useMedianNumberStateDispatch } from "../context/medianNumberContext";
import { generateUniqueID } from "../utils/utils";

const useManageMedianNumbers = () => {
  const queryClient = useQueryClient();
  const { state, dispatch } = useMedianNumberStateDispatch();

  const getNewMedianNumbers = async (upperLimitNumber: string) => {
    try {
      const { data: medianPrimeNumbers } = await queryClient.fetchQuery({
        queryKey: ["medianPrimeNumbers"],
        queryFn: () => fetchMedianNumbers(upperLimitNumber),
      });
      dispatch({
        type: "ADD_HISTORY",
        payload: {
          id: generateUniqueID(),
          upperLimitNumber,
          medianPrimeNumbers,
        },
      });
    } catch (error) {
      setError("Error on fetching median prime numbers");
    }
  };

  const setError = (message: string) => {
    dispatch({
      type: "ERROR",
      payload: message,
    });
  };

  const removeHistory = (id: string) => {
    dispatch({
      type: "REMOVE_HISTORY",
      payload: id,
    });
  };

  return {
    getNewMedianNumbers,
    setError,
    state,
    removeHistory,
  };
};

export default useManageMedianNumbers;
