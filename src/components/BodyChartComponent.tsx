import React, {Component} from 'react';
import IUser from "../types/user.type";
import UserService from "../services/user.service";
import { Bar } from 'react-chartjs-2';

// type Props = {};

// type State = {
//     redirect: string | null,
//     userReady: boolean,
//     userContent: IUser & any
// }

// export default class BodyChartComponent extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             redirect: null,
//             userReady: false,
//             userContent: {access_token: ""}
//         };
//     }

//     componentDidMount() {
//         const userContent = UserService.getPublicContent;
//         userContent().then(
//             response => {
//                 this.setState({
//                     userContent: response.data
//                 })
//             }
//         );
//         const getToken = sessionStorage.getItem("user");
//         if (!userContent) this.setState({redirect: "/home"});
//         if (!getToken) this.setState({redirect: "/login"});
//     }
    
//     render() {
//         const {userContent} = this.state;
//         const data = {
//             labels: ["Bodyfat"],
//             datasets: [{
//               label: 'My First Dataset',
//               data: [65, 59, 80, 81, 56, 55, 40],
//               fill: false,
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//               ],
//               borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//               ],
//               borderWidth: 1
//             }]
//           };

//         const config = {
//             type: 'bar',
//             data,
//             options: {
//             }
//         };

//         return (
//             <Bar 
//             options={config.options}
//             data={data}
//             />
//         )
//     }

// }

export default class BodyChartComponent extends Component {
    render () {
        const data = {
            labels: [
                'January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };
    
        const config = {
            type: 'line',
            data: data,
            options: {}
        };
          return (
            <Bar 
            data={data}
            />
        )
    }
}