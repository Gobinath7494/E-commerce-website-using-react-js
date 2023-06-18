import { Card, Container, Table} from "react-bootstrap"
import classes from "./homepage.module.css";
const Homepage = () => {
  return (
    <Container style={{margin:"5rem",textAlign:"center"}}>
    <Card style={{padding:"2rem 3rem"}}>
        <h1>Tours</h1>
        <Table className={classes.table}>
          <tr>
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
               <button>Buy Ticket</button>
            </td>
          </tr>
          <tr>
            <td>JUL 19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              {" "}
              <button>Buy Ticket</button>
            </td>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              {" "}
              <button>Buy Ticket</button>
            </td>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              {" "}
              <button>Buy Ticket</button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              {" "}
              <button>Buy Ticket</button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              {" "}
              <button>Buy Ticket</button>
            </td>
          </tr>
        </Table>
      </Card>
      </Container>
  );
};

export default Homepage;
