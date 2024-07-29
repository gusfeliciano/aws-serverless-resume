# Cloud Resume Challenge - Frontend

This repository contains the frontend code for my implementation of the Cloud Resume Challenge. It's a static website that displays my resume and includes a visitor counter, demonstrating various AWS services and CI/CD practices.

## Project Structure

```
.
├── index.html
├── main.js
├── main.css
├── assets/
│   ├── images/
│   │   └── gf-profile2.png
│   └── Gustavo.Feliciano.Resume.pdf
├── .github/
│   └── workflows/
│       └── deploy-frontend.yml
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- AWS S3 (for hosting)
- AWS CloudFront (for content delivery)
- AWS API Gateway & Lambda (for the visitor counter backend)
- GitHub Actions (for CI/CD)

## Local Setup

1. Clone this repository:
   ```
   git clone https://github.com/gusfeliciano/cloud-resume-frontend.git
   cd cloud-resume-frontend
   ```

2. Open `index.html` in your browser to view the site locally.

3. To test the visitor counter functionality, you'll need to set up the backend and update the API URL in `main.js`. Replace `REPLACE_WITH_API_GATEWAY_URL` with your actual API Gateway URL.

## Deployment

This project is set up for automatic deployment to AWS S3 and invalidation of the CloudFront distribution when changes are pushed to the `main` branch.

### Prerequisites for deployment:

1. An AWS account with S3 and CloudFront set up
2. A GitHub repository with the following secrets configured:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `S3_BUCKET`
   - `CLOUDFRONT_DISTRIBUTION_ID`

### Deployment process:

1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Configure AWS credentials
   - Fetch the API URL from CloudFormation stack
   - Update the API URL in `main.js`
   - Sync the content to the S3 bucket
   - Invalidate the CloudFront distribution

## Visitor Counter

The visitor counter is implemented in `main.js`. It makes a POST request to an API Gateway endpoint, which triggers a Lambda function to increment and return the visitor count stored in DynamoDB.

## Customization

To customize this resume for your own use:

1. Update the content in `index.html` with your own information
2. Replace `gf-profile2.png` with your own profile picture
3. Update `Gustavo.Feliciano.Resume.pdf` with your own resume PDF
4. Modify styles in `main.css` as needed
5. Update the API Gateway URL in `main.js` with your own backend URL

## Contributing

This project is part of my personal implementation of the Cloud Resume Challenge. However, if you notice any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Gus Feliciano - gus.feliciano@outlook.com

Project Link: [https://github.com/gusfeliciano/cloud-resume-frontend](https://github.com/gusfeliciano/cloud-resume-frontend)

---

This project is part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), an excellent way to showcase cloud skills and learn new technologies.
