import React, { useEffect } from 'react';
import { Template } from 'devextreme-react/core/template';
import TreeList, { Column, ColumnChooser, HeaderFilter, SearchPanel, Selection, Lookup } from 'devextreme-react/tree-list';
import DataSource  from 'devextreme/data/data_source';

type cfFile = { ID: string, ParID: string };
let cfFiles: cfFile[] = [{ ID: "/files", ParID: "/" }];



const dataSource = new DataSource({
  store: {
      type: "array",
      data: cfFiles
  }
});

export default function FileList() {
  useEffect(() => {
      // A DataSource instance created outside a UI component should be disposed of manually.
      readDir();
      return () => { dataSource.dispose(); }
  },[]);


  return (
    <TreeList
      dataSource={cfFiles}
      showBorders={true}
      columnAutoWidth={true}
      wordWrapEnabled={true}
      keyExpr="ID"
      parentIdExpr="ParID"
      rootValue={'/'}
      dataStructure="plain"
      height="300px"
    >
      <SearchPanel visible={true} width={250} />
      <HeaderFilter visible={true} />
      <Selection mode="single" />
      <ColumnChooser enabled={false} />

      <Column
        dataField="ID"
        width={300}
        caption="FILE"
        allowSorting={true}
        minWidth={200}
      />
      <Column
        dataField="ParID"
        visible={true}
      />
      
    </TreeList>
  );
}







function readDir() {

  const fs = window.require('fs');
  const path = window.require('path');
  
  fs.readdir(path.resolve(__dirname, 'files'), (err: any, files: any) => {
    files.map(function (file: string) {
      let f = { ID: file, ParID: (__dirname + 'files') } as cfFile;
      cfFiles.push(f);
    })

    console.log(cfFiles);
  });
}



function read() {
  const fs = window.require('fs');
  const path = window.require('path');

  let values = [];

  console.log(path.resolve(__dirname, './files/test1.txt'));
  fs.readFile(
    path.resolve(__dirname, './files/test1.txt'), 'utf-8', (err: any, data: any) => {
      if (err) throw err;
      values = data.toString().split('\n');
      console.log(values.length, values);
      //const listItems = values.map(value => <p>{value}</p>);
      return [];
    }
  );
}