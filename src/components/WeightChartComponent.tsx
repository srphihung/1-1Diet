import React, {Component} from 'react';
import IUser from "../types/user.type";
import UserService from "../services/user.service";
import { Bar } from 'react-chartjs-2';

type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

export default class WeightChartComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            userContent: {access_token: ""}
        };
    }

    componentDidMount() {
        const userContent = UserService.getPublicContent;
        userContent().then(
            response => {
                this.setState({
                    userContent: response.data
                })
            }
        );
        const getToken = sessionStorage.getItem("user");
        if (!userContent) this.setState({redirect: "/home"});
        if (!getToken) this.setState({redirect: "/login"});
    }
    
    render() {
        
        const {userContent} = this.state;
        
        const data = {
          labels: ["Start gewicht","Huidig gewicht","Streef gewicht"],
          datasets: [{
            label: "Gewicht",
            data: [
                70, 90, 75],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
            ],
            borderWidth: 2,
            hoverBorderWidth: 3
          }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        enabled: false,
                    }
                },
                scales: {
                    x: {
                        grid: {
                          offset: true,
                        }
                    },
                }
            },
        }

        return (
            <Bar 
            options={config.options}
            data={data}
            />
        )
    }

}