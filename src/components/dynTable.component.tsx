//Build Dynamic Table - From any WebApi or Local Json File Using AXIOS Methods


import * as React from 'react';
import {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import UserService from "../services/user.service";
import IUser from "../types/user.type";

type Props = {};

type State = {
    datarecords: any[],
    datacolumns: any[],
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

class BuildDynamicTable extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            datarecords: [],
            datacolumns: [],
            redirect: null,
            userReady: false,
            userContent: {access_token: ""}
        }
    }

    componentDidMount() {
        const userContent = UserService.getPublicContent;
        userContent().then(
            response => {
                this.setState({
                    userContent: response.data
                });
                this.extractColumnNames();
            }
        );
        const getToken = sessionStorage.getItem("user");
        if (!userContent) this.setState({redirect: "/home"});
        if (!getToken) this.setState({redirect: "/login"});
    }

    // public componentWillMount(): void {
    //     const api_url = "http://dummy.restapiexample.com/api/v1/employees";
    //     axios.get(api_url).then(response => {
    //         this.setState({datarecords: response.data});
    //         this.extractColumnNames();
    //     })
    // }

    private extractColumnNames(){
        const firstrecord = _.keys(this.state.userContent[0]);
        this.setState({datacolumns: firstrecord,});
    }

    private displayRecords(key: number) {
        const datacolumns= this.state.datacolumns;

        return datacolumns.map((each_col) =>
            this.displayRecordName(each_col,key)
        )
    }

    private displayRecordName(colname:string, key:number){
        const record = this.state.datarecords[key];
        return <th>{record[colname]}</th>
    }

    private static Capitalize(str: string){
        const str_t = str.toUpperCase();
        return str_t.replaceAll("_", " ");
    }

    public render() {
        const {userContent} = this.state;
        const datarecords = this.state.datarecords;
        const each_datarecord_keys = this.state.datacolumns;
        return (
            <div>
                {datarecords.length === 0 && (
                    <div className="text-center">
                        <h2>No datarecords found at the moment</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                            <tr>
                                {each_datarecord_keys && each_datarecord_keys.map(each_datarecord_key =>
                                    <th scope="col">{BuildDynamicTable.Capitalize(each_datarecord_key)}</th>
                                )}
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {datarecords && datarecords.map((each_datarecord, recordindex) =>
                                <tr key={each_datarecord.id}>
                                    {this.displayRecords(recordindex)}
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildDynamicTable;