import Head from 'next/head'

export default function ResetPassword() {
  return (
    <div className="container">
      <Head>
        <title>Fasta > Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="title">
            Welcome to FASTA 
              <p>... safety & convenience! </p>
            </div>
        </main>
        <main>
          <div className="label">
            <a href="/resetpassword">Forgot your password ?</a>
          </div>
        </main>
        <style jsx>{`
            .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }

            main {
            padding: 2rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            }

            .title {
                top: 45px;
                left: 166px;
                width: 194px;
                height: 16px;
                text-align: center;
                margin-top: 20px;
                font: Bold 16px/20px Arial;
                letter-spacing: 0px;
                color: #43A047;
                opacity: 1;
            }
            p{
              font: Bold 12px/14px Arial;
            }
           .label {
              top: 239px;
              left: 100px;
              width: 198px;
              height: 22px;
              text-align: center;
              font: Bold 20px/30px Arial;
              letter-spacing: 0px;
              color: #43A047;
              opacity: 1;
          }

          a {
            text-decoration: none;
          }

          a:hover {
            text-transform: underline;
            color: #43A047;
          }
            .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
            }

            @media (max-width: 600px) {
            .grid {
                width: 100%;
                flex-direction: column;
            }
            }
        `}</style>

        <style jsx global>{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
            box-sizing: border-box;
            }
        `}</style>
    </div>
  )
}
