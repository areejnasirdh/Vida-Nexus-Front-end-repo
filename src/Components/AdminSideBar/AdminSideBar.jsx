import React, { useState } from "react";
import "./AdminSideBar.css";
import { useNavigate } from "react-router-dom";
const AdminSideBar = () => {
  const navigate = useNavigate();
  const [subNavOpen, setSubNavOpen] = useState(false);
  const handleShowSubNav = () => {
    setSubNavOpen(!subNavOpen);
  };
  return (
    <div className="admin-sidebar">
      <img src="/Images/Logo.png" alt="Logo.png" />
      <div>
        <button onClick={() => navigate("invoice")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.25"
            height="23"
            viewBox="0 0 17.25 23"
          >
            <path
              id="Icon_awesome-file-invoice-dollar"
              data-name="Icon awesome-file-invoice-dollar"
              d="M16.936,4.717l-4.4-4.4A1.077,1.077,0,0,0,11.774,0H11.5V5.75h5.75V5.476A1.075,1.075,0,0,0,16.936,4.717ZM10.063,6.109V0H1.078A1.076,1.076,0,0,0,0,1.078V21.922A1.076,1.076,0,0,0,1.078,23H16.172a1.076,1.076,0,0,0,1.078-1.078V7.188H11.141A1.081,1.081,0,0,1,10.063,6.109ZM2.875,3.234a.359.359,0,0,1,.359-.359H6.828a.359.359,0,0,1,.359.359v.719a.359.359,0,0,1-.359.359H3.234a.359.359,0,0,1-.359-.359Zm0,3.594V6.109a.359.359,0,0,1,.359-.359H6.828a.359.359,0,0,1,.359.359v.719a.359.359,0,0,1-.359.359H3.234A.359.359,0,0,1,2.875,6.828ZM9.344,18.682v1.084a.359.359,0,0,1-.359.359H8.266a.359.359,0,0,1-.359-.359V18.674a2.572,2.572,0,0,1-1.409-.51.36.36,0,0,1-.026-.545l.528-.5a.369.369,0,0,1,.455-.033,1.082,1.082,0,0,0,.576.167H9.293a.565.565,0,0,0,.53-.593.586.586,0,0,0-.394-.572l-2.021-.606A2.033,2.033,0,0,1,5.989,13.53a2,2,0,0,1,1.917-2.025V10.422a.359.359,0,0,1,.359-.359h.719a.359.359,0,0,1,.359.359v1.091a2.569,2.569,0,0,1,1.409.51.36.36,0,0,1,.026.545l-.528.5A.369.369,0,0,1,9.8,13.1a1.078,1.078,0,0,0-.576-.167H7.957a.565.565,0,0,0-.53.593.586.586,0,0,0,.394.572l2.021.606a2.033,2.033,0,0,1,1.419,1.949A2,2,0,0,1,9.344,18.682Z"
              fill="#fff"
            />
          </svg>

          <p>Xero Invoices</p>
        </button>

        <button onClick={() => navigate("profile")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.125"
            height="22.124"
            viewBox="0 0 22.125 22.124"
          >
            <g
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(-0.989 -0.999)"
            >
              <path
                id="Path_71906"
                data-name="Path 71906"
                d="M14.425,13.849a4.425,4.425,0,1,1,4.425-4.425,4.425,4.425,0,0,1-4.425,4.425Zm0-7.375a2.95,2.95,0,1,0,2.95,2.95A2.95,2.95,0,0,0,14.425,6.475Z"
                transform="translate(-2.366 -1.05)"
                fill="#fa8708"
              />
              <path
                id="Path_71907"
                data-name="Path 71907"
                d="M12.821,27.787a11.062,11.062,0,0,1-8.547-4.049l-.383-.472.383-.465a11.062,11.062,0,0,1,17.094,0l.383.465-.383.472A11.062,11.062,0,0,1,12.821,27.787Zm-7-4.513a9.587,9.587,0,0,0,14.012,0,9.587,9.587,0,0,0-14.012,0Z"
                transform="translate(-0.762 -4.664)"
                fill="#fa8708"
              />
              <path
                id="Path_71908"
                data-name="Path 71908"
                d="M12.059,23.123a11.062,11.062,0,1,1,8.547-4.049,11.062,11.062,0,0,1-8.547,4.049Zm0-20.649a9.587,9.587,0,1,0,9.587,9.587,9.587,9.587,0,0,0-9.587-9.587Z"
                transform="translate(0)"
                fill="#fa8708"
              />
              <path
                id="Path_71909"
                data-name="Path 71909"
                d="M5.18,23.5s7.426,8.3,14.985.826l.973-.826s-6.313-6.549-12.721-2.618Z"
                transform="translate(-1.1 -4.891)"
                fill="#fa8708"
              />
              <circle
                id="Ellipse_447"
                data-name="Ellipse 447"
                cx="3.687"
                cy="3.687"
                r="3.687"
                transform="translate(8.372 4.687)"
                fill="#fa8708"
              />
            </g>
          </svg>
          <p>Profile Settings</p>
        </button>

        <div
          className={`admin-sidebar-subnav ${
            subNavOpen ? "admin-sidebar-subnav-open" : ""
          } `}
        >
          <button onClick={handleShowSubNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27.154"
              height="27.154"
              viewBox="0 0 27.154 27.154"
            >
              <g id="store_9116379" transform="translate(0)">
                <path
                  id="Path_71868"
                  data-name="Path 71868"
                  d="M230.027,5.487a1.228,1.228,0,0,0,1.227-1.227V0H228.8V4.261A1.228,1.228,0,0,0,230.027,5.487Z"
                  transform="translate(-216.665)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71869"
                  data-name="Path 71869"
                  d="M153.761,5.487a1.228,1.228,0,0,0,1.227-1.227V0h-2.454V4.261A1.228,1.228,0,0,0,153.761,5.487Z"
                  transform="translate(-144.444)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71870"
                  data-name="Path 71870"
                  d="M77.494,5.487a1.228,1.228,0,0,0,1.227-1.227V0H76.267V4.261A1.228,1.228,0,0,0,77.494,5.487Z"
                  transform="translate(-72.222)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71871"
                  data-name="Path 71871"
                  d="M1.227,5.487A1.228,1.228,0,0,0,2.454,4.261V0H.8A.8.8,0,0,0,0,.8V4.261A1.228,1.228,0,0,0,1.227,5.487Z"
                  transform="translate(0)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71872"
                  data-name="Path 71872"
                  d="M306.293,5.487a1.228,1.228,0,0,0,1.227-1.227V.8a.8.8,0,0,0-.8-.8h-1.658V4.261A1.228,1.228,0,0,0,306.293,5.487Z"
                  transform="translate(-288.887)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71873"
                  data-name="Path 71873"
                  d="M228.916,212.427l1.566-1.566a2.382,2.382,0,0,1,.771-.517v-.61H228.8v2.819Q228.856,212.488,228.916,212.427Z"
                  transform="translate(-216.665 -198.61)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71874"
                  data-name="Path 71874"
                  d="M16.179,121.386v1.32c.036.011.072.022.108.034a2.389,2.389,0,0,1,2.147-1.344h.2v-3.541a2.838,2.838,0,0,1-3.249-.577,2.828,2.828,0,0,1-4.045,0,2.828,2.828,0,0,1-4.045,0,2.828,2.828,0,0,1-4.045,0A2.838,2.838,0,0,1,0,117.855V128.9a.8.8,0,0,0,.8.8h9.543v-.2a2.372,2.372,0,0,1,.205-.967v-7.14a.8.8,0,0,1,.8-.8h4.045A.8.8,0,0,1,16.179,121.386Zm-8.09,5.056a.8.8,0,0,1-.8.8H3.249a.8.8,0,0,1-.8-.8v-5.056a.8.8,0,0,1,.8-.8H7.294a.8.8,0,0,1,.8.8v5.056Z"
                  transform="translate(0 -111.058)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71875"
                  data-name="Path 71875"
                  d="M76.267,209.733h2.454V213.2H76.267Z"
                  transform="translate(-72.222 -198.61)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71876"
                  data-name="Path 71876"
                  d="M344.635,343.3a1.335,1.335,0,1,0,1.335,1.335A1.336,1.336,0,0,0,344.635,343.3Z"
                  transform="translate(-325.093 -325.093)"
                  fill="#fa8708"
                />
                <path
                  id="Path_71877"
                  data-name="Path 71877"
                  d="M239.364,230.643h-.931a6.156,6.156,0,0,0-.379-.913l.658-.658a.8.8,0,0,0,0-1.125l-1.566-1.566a.8.8,0,0,0-1.125,0l-.658.658a6.15,6.15,0,0,0-.913-.379v-.931a.8.8,0,0,0-.8-.8H231.44a.8.8,0,0,0-.8.8v.931a6.151,6.151,0,0,0-.913.379l-.658-.658a.8.8,0,0,0-1.125,0l-1.566,1.566a.8.8,0,0,0,0,1.125l.658.658a6.155,6.155,0,0,0-.379.913h-.931a.8.8,0,0,0-.8.8v2.215a.8.8,0,0,0,.8.8h.931a6.154,6.154,0,0,0,.379.913l-.658.658a.8.8,0,0,0,0,1.125l1.566,1.566a.8.8,0,0,0,1.125,0l.658-.658a6.156,6.156,0,0,0,.913.379v.931a.8.8,0,0,0,.8.8h2.215a.8.8,0,0,0,.8-.8v-.931a6.153,6.153,0,0,0,.913-.379l.658.658a.8.8,0,0,0,1.125,0l1.566-1.566a.8.8,0,0,0,0-1.125l-.658-.658a6.156,6.156,0,0,0,.379-.913h.931a.8.8,0,0,0,.8-.8v-2.215A.8.8,0,0,0,239.364,230.643Zm-6.817,4.829a2.926,2.926,0,1,1,2.926-2.926A2.929,2.929,0,0,1,232.547,235.472Z"
                  transform="translate(-213.005 -213.004)"
                  fill="#fa8708"
                />
              </g>
            </svg>

            <p>Store Settings</p>
          </button>

          <div>
            <button onClick={() => navigate("setting/layout")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.877"
                height="21.641"
                viewBox="0 0 21.877 21.641"
              >
                <g id="_x36_5" transform="translate(-2.5 -2.759)">
                  <path
                    id="Path_71902"
                    data-name="Path 71902"
                    d="M2.5,29.2a.682.682,0,0,0,.679.684H16.906V12.829H2.5Zm1.735-8.151a.326.326,0,0,1,.262-.32l1.062-.213a4.391,4.391,0,0,1,.519-1.273l-.6-.9a.326.326,0,0,1,.041-.412l.665-.662a.326.326,0,0,1,.41-.041l.9.6A4.138,4.138,0,0,1,8.769,17.3l.213-1.062a.326.326,0,0,1,.32-.262h.942a.326.326,0,0,1,.32.262l.213,1.062a4.138,4.138,0,0,1,1.269.527l.9-.6a.326.326,0,0,1,.41.041l.665.662a.326.326,0,0,1,.041.412l-.6.9a4.4,4.4,0,0,1,.523,1.273l1.062.213a.326.326,0,0,1,.262.32v.939a.326.326,0,0,1-.261.319l-1.063.216a4.4,4.4,0,0,1-.523,1.273l.6.9a.326.326,0,0,1-.041.411l-.664.664a.326.326,0,0,1-.412.04l-.894-.6a4.143,4.143,0,0,1-1.277.527L10.563,26.8a.326.326,0,0,1-.32.262H9.3a.326.326,0,0,1-.32-.262l-.213-1.062A4.121,4.121,0,0,1,7.5,25.207l-.9.6a.326.326,0,0,1-.412-.04L5.521,25.1a.326.326,0,0,1-.041-.411l.6-.9a4.391,4.391,0,0,1-.519-1.273L4.5,22.3a.326.326,0,0,1-.261-.319Z"
                    transform="translate(0 -5.481)"
                    fill="#f88507"
                  />
                  <circle
                    id="Ellipse_446"
                    data-name="Ellipse 446"
                    cx="2.203"
                    cy="2.203"
                    r="2.203"
                    transform="translate(7.57 13.834)"
                    fill="#f88507"
                  />
                  <path
                    id="Path_71903"
                    data-name="Path 71903"
                    d="M23.7,2.759H3.179a.679.679,0,0,0-.679.679v3H24.377v-3a.672.672,0,0,0-.679-.679ZM4.728,5.645a.48.48,0,1,1,.48-.48A.5.5,0,0,1,4.728,5.645Zm2.141,0a.48.48,0,1,1,.481-.48A.5.5,0,0,1,6.869,5.645Zm2.141,0a.48.48,0,1,1,.481-.48A.5.5,0,0,1,9.01,5.645Zm13.164,0H16.793a.456.456,0,0,1,0-.912h5.382a.456.456,0,0,1,0,.912Z"
                    fill="#f88507"
                  />
                  <path
                    id="Path_71904"
                    data-name="Path 71904"
                    d="M36.108,29.88h5.88a.682.682,0,0,0,.679-.684V12.829H36.108Zm1.66-14.827h3.244a.456.456,0,1,1,0,.912H37.768a.456.456,0,0,1,0-.912Zm0,2.911h3.244a.456.456,0,1,1,0,.912H37.768a.456.456,0,0,1,0-.912Zm0,2.91h3.244a.456.456,0,1,1,0,.912H37.768a.456.456,0,0,1,0-.912Zm0,2.911h3.244a.456.456,0,1,1,0,.912H37.768a.456.456,0,0,1,0-.912Zm0,2.91h3.244a.456.456,0,1,1,0,.912H37.768a.456.456,0,0,1,0-.912Z"
                    transform="translate(-18.291 -5.481)"
                    fill="#f88507"
                  />
                </g>
              </svg>
              <p>Layout Settings</p>
            </button>
            <button onClick={() => navigate("setting/product")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.811"
                height="20.341"
                viewBox="0 0 22.811 20.341"
              >
                <path
                  id="Path_71891"
                  data-name="Path 71891"
                  d="M22.558,0H.252A.252.252,0,0,0,0,.252V20.088a.252.252,0,0,0,.5,0V2.9h21.8V20.088a.252.252,0,0,0,.5,0V.252A.252.252,0,0,0,22.558,0ZM15.291,1.407a.252.252,0,0,1,.252-.252H16.7a.252.252,0,0,1,0,.5H15.543a.253.253,0,0,1-.252-.252Zm2.362,0a.252.252,0,0,1,.252-.252H19.06a.252.252,0,0,1,0,.5H17.905a.252.252,0,0,1-.252-.252Zm3.769.252H20.267a.252.252,0,0,1,0-.5h1.155a.252.252,0,0,1,0,.5Zm0,0"
                  fill="#f78507"
                />
              </svg>
              <p>Product Settings</p>
            </button>
            <button onClick={() => navigate("setting/service")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.543"
                height="25.458"
                viewBox="0 0 26.543 25.458"
              >
                <path
                  id="content-management-system_8292322"
                  d="M18.063,21.325A3.567,3.567,0,1,0,14.5,17.757,3.567,3.567,0,0,0,18.063,21.325Zm-5.074-4.706a5.182,5.182,0,0,1,.682-1.646.251.251,0,0,0-.007-.28l-.76-1.087L13.911,12.6,15,13.36a.257.257,0,0,0,.282.007,5.131,5.131,0,0,1,1.646-.683.252.252,0,0,0,.195-.2l.231-1.3h1.422L19,12.48a.252.252,0,0,0,.195.2,5.136,5.136,0,0,1,1.646.683.256.256,0,0,0,.282-.007l1.087-.759,1.006,1.007-.759,1.087a.25.25,0,0,0-.007.28,5.166,5.166,0,0,1,.682,1.646.254.254,0,0,0,.2.2l1.3.233v1.421l-1.3.233a.255.255,0,0,0-.2.193,5.139,5.139,0,0,1-.682,1.646.256.256,0,0,0,.007.283l.759,1.087-1.006,1.007-1.087-.759a.249.249,0,0,0-.282-.007,5.22,5.22,0,0,1-1.646.683.252.252,0,0,0-.195.2l-.231,1.3H17.351l-.231-1.3a.252.252,0,0,0-.195-.2,5.211,5.211,0,0,1-1.646-.683.25.25,0,0,0-.282.007l-1.087.759L12.905,21.91l.76-1.087a.257.257,0,0,0,.007-.283,5.114,5.114,0,0,1-.682-1.646.255.255,0,0,0-.2-.193l-1.305-.233V17.048l1.305-.233a.254.254,0,0,0,.2-.2Zm-1.808-.036,1.351-.24a5.657,5.657,0,0,1,.62-1.5l-.786-1.123a.257.257,0,0,1,.029-.327l1.307-1.3a.251.251,0,0,1,.325-.029l1.125.785a5.732,5.732,0,0,1,1.5-.621l.239-1.348a.254.254,0,0,1,.251-.211h1.848a.254.254,0,0,1,.251.211l.239,1.348a5.742,5.742,0,0,1,1.5.621l1.124-.785a.252.252,0,0,1,.326.029l1.308,1.3a.257.257,0,0,1,.028.327l-.786,1.123a5.646,5.646,0,0,1,.62,1.5l1.351.24a.255.255,0,0,1,.21.251v1.85a.255.255,0,0,1-.21.251l-1.351.236a5.62,5.62,0,0,1-.62,1.5l.786,1.127a.252.252,0,0,1-.028.323l-1.308,1.308a.256.256,0,0,1-.326.029l-1.124-.785a5.731,5.731,0,0,1-1.5.618l-.239,1.352a.257.257,0,0,1-.251.211H17.139a.257.257,0,0,1-.251-.211l-.239-1.352a5.711,5.711,0,0,1-1.5-.618l-1.125.785a.255.255,0,0,1-.325-.029l-1.307-1.308a.252.252,0,0,1-.029-.323l.786-1.127a5.644,5.644,0,0,1-.62-1.5l-1.351-.236a.255.255,0,0,1-.21-.251v-1.85a.255.255,0,0,1,.21-.251ZM7.569,31.932l.887-.523a1.682,1.682,0,0,1,1.313-.185l6.982,1.788a1.2,1.2,0,0,0,.967-.156l7.294-4.673a1.131,1.131,0,0,0,.307-1.613l-.041-.055a1.117,1.117,0,0,0-1.454-.331l-4.572,2.475a1.509,1.509,0,0,1-1.43,1.039,1.609,1.609,0,0,1-.292-.029l-4.971-.985a.254.254,0,1,1,.1-.5l4.971.985a1,1,0,0,0,1.169-.781l0-.015a.992.992,0,0,0-.7-1.152l-8.56-2.5a1.184,1.184,0,0,0-1.02.156L4.686,27.4l2.883,4.528Zm2.074-.218L16.625,33.5a1.7,1.7,0,0,0,.443.058,1.716,1.716,0,0,0,.925-.276l7.294-4.673a1.638,1.638,0,0,0,.445-2.337l-.041-.058a1.624,1.624,0,0,0-2.108-.483l-4.257,2.307a1.5,1.5,0,0,0-1.077-1.3l-8.56-2.5a1.693,1.693,0,0,0-1.443.218L4.413,26.976,3.9,26.169a.255.255,0,0,0-.351-.08L.12,28.273a.257.257,0,0,0-.112.16.259.259,0,0,0,.034.193L4.421,35.5a.252.252,0,0,0,.159.113.289.289,0,0,0,.056.007.26.26,0,0,0,.136-.04L8.2,33.4a.252.252,0,0,0,.078-.349l-.437-.69.873-.512a1.176,1.176,0,0,1,.929-.134ZM3.92,28.36a.722.722,0,1,1-.722-.723.722.722,0,0,1,.722.723Zm-.509,0a.213.213,0,1,1-.213-.214.213.213,0,0,1,.213.214Z"
                  transform="translate(0.249 -10.417)"
                  fill="#f88507"
                  stroke="#f88507"
                  stroke-width="0.5"
                  fill-rule="evenodd"
                />
              </svg>
              <p>Service Settings</p>
            </button>
          </div>
        </div>

        <button onClick={() => navigate("docusign")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.987"
            height="23.987"
            viewBox="0 0 23.987 23.987"
          >
            <g
              id="Group_3525"
              data-name="Group 3525"
              transform="translate(-193.988 -125.514)"
            >
              <path
                id="Path_71888"
                data-name="Path 71888"
                d="M217.975,125.514H193.988V149.5h23.987Z"
                fill="#f88507"
              />
              <path
                id="Path_71889"
                className="svg-rev"
                data-name="Path 71889"
                d="M224.1,195.884H206.775v2.331H224.1Z"
                transform="translate(-9.457 -52.045)"
              />
              <path
                id="Path_71890"
                className="svg-rev"
                data-name="Path 71890"
                d="M221.124,151.016l1.649-1.646,5.014-5.017-1.668-1.665-3.83,3.833v-9.5h-2.334l0,9.5-3.833-3.833-1.665,1.665,5.014,5.017Z"
                transform="translate(-15.141 -8.512)"
              />
            </g>
          </svg>
          <p>DocuSign</p>
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
