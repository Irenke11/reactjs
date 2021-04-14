import React from 'react';
import Table from 'react-bootstrap/Table';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaCopy} from 'react-icons/fa';

class Notbook extends React.Component {
    state = {
        value: '',
        copied: false,
      };

      
    render(){
        const td = {
            cursor: 'pointer',
        };  
        let  tableth = ["No","Name","install","url","note"];
        let  data= [
            ["react-router","npm i react-router","https://www.npmjs.com/package/react-router","router"],
            ["react-bootstrap","npm install react-bootstrap bootstrap","https://react-bootstrap.github.io/","bootstrap"],
            // ["redux","install","url","xx"],
            ["copy-to-clipboard","npm install --save react-copy-to-clipboard","https://github.com/nkbt/react-copy-to-clipboard","better"],
            ["react-icons","npm install react-icons --save","https://react-icons.github.io/","icon"],
            ["google-maps","npm install --save google-map-react","https://www.npmjs.com/package/google-map-react","map"],
        ];
        return(
            <>
            <h3 className="d-flex m-3 justify-contnet-center">Notbook</h3>
            <h5 className="d-flex m-3 justify-contnet-center">There is my Notbook. I will record the tools, shortcut instructions and precautions I used to make this webpage here.</h5>
            <span className="d-flex m-3 justify-contnet-center">This is not all, please adjust yourself.</span>
            <Table responsive hover striped >
            <thead className="">
                <tr>
                {tableth.map((index) => (
                    <th key={index}>{index}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((value1,key1) => (
                    <tr>
                        <td>{key1+1}</td>
                        <td>{value1[0]}</td>
                        <td style={td}>
                            <CopyToClipboard text={value1[1]}  onCopy={() => this.setState({copied: true})}>
                            <span><FaCopy />  {value1[1]} </span>
                            </CopyToClipboard>
                        </td>
                        <td><a href={value1[2]}  target="_blank" rel="noopener noreferrer">{value1[2]}</a></td>
                        <td>{value1[3]}</td>
                  
                    </tr>
                ))}   
            </tbody>
            </Table>
            </>
        );
        
    }
}

export default Notbook;