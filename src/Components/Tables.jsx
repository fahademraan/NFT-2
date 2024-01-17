import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import Diamond from "./Images/gray-diamond.svg";
import Bitcoin from "./Images/bitcoin.png";

const Tables = () => {
  return (
    <div className="container mx-auto">
      <div className="border border-gray-500 p-5 mt-10 bg-gray-600/10 rounded">
        <div className="table-res">
          <table class="table border-collapse table-auto">
            <thead>
              <tr>
                <th class="p-3">#</th>
                <th class="p-3">Name</th>
                <th class="p-3">Price</th>
                <th class="p-3">24h%</th>
                <th class="p-3">24h%</th>
                <th class="p-3">6d%</th>
                <th class="p-3">Market Cap</th>
                <th class="p-3">Volume(24h)</th>
                <th class="p-3">Circulating Supply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">
                  {/* <img src={Diamond} className="w-auto" alt="" />  */}
                  Bitcoin BTC
                </td>
                <td class="p-3">
                  <div>
                    {/* <img src={Bitcoin} className="w-auto" alt="" /> */}
                  </div>
                  ₩1,502,989,963
                </td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
              <tr>
                <td class="p-3">1</td>
                <td class="p-3">Bitcoin BTC</td>
                <td class="p-3">₩1,502,989,963</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">0.65%</td>
                <td class="p-3">₩1,502,989,963,439,782</td>
                <td class="p-3">
                  ₩51,502,989,963,439 <br />{" "}
                  <span class="text-gray-700">932,071 BTC</span>
                </td>
                <td class="p-3">18,648,248 BTC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
