function SMGrid(props) {
    const { datasource, Cols } = props;

    console.log(datasource, Cols);

    return (
        <>
            {Cols && Array.isArray(Cols) && (
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>s#</th>
                            {Cols.map((y, i) => (
                                <th key={i}>{y.displayName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datasource &&
                            Array.isArray(datasource) &&
                            datasource.length > 0 ? (
                            datasource.map((x, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    {Cols.map((y, ind) => (
                                        <td key={ind}>{x[y.key]}</td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <h1>No Data Found</h1>
                        )}
                    </tbody>
                </table>
            )}
        </>
    );
}
export default SMGrid;