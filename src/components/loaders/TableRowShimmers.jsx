import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function TableRowShimmers(props) {
  return [...Array(props.rows ?? 3).keys()].map((i) => (
    <tr key={i}>
      {[...Array(props.cols ?? 5).keys()].map((i) => (
        <td key={i}>
          <Skeleton />
        </td>
      ))}
    </tr>
  ));
}

export default TableRowShimmers;
