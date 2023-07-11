In this project, I build **Reusable Banners** App.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png" alt="resuable-banners-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/reusable-banners-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionalities added</summary>
<br/>

The app has the following functionalities

- The App is provided with `bannerCardsList`. It consists of a list of bannerCardItem objects with the following properties in each bannerCardItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |     id      |  Number   |
  | headerText  |  String   |
  | description |  String   |
  |  className  |  String   |

- The value of the key `id` is used as a key to the `BannerCardItem` component.
- The value of the key `className` is used as a className for the HTML list item in the `BannerCardItem` component.

</details>

<details>
<summary>Implemented Files</summary>
<br/>

Used these files to complete the implementation:

- `src/App.js`
- `src/App.css`
- `src/components/BannerCardItem/index.js`
- `src/components/BannerCardItem/index.css`
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #326a9d; width: 150px; padding: 10px; color: white">Hex: #326a9d</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
