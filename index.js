addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

const links = [
  // your links array here
];

async function handleRequest(request) {
  const html = generateHTML(links);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
    },
  });
}

function generateHTML(links) {
  let html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>导航页</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          color: #fff;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          max-width: 1200px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          padding: 30px;
          margin: 20px;
        }
        .category {
          margin-bottom: 30px;
        }
        .category h2 {
          color: #e0e0e0;
          font-size: 1.8em;
          border-bottom: 2px solid #ccc;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .link {
          background-color: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 10px;
          text-decoration: none;
          color: #fff;
          transition: background-color 0.3s, transform 0.3s;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2em;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .link:hover {
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .links {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 style="text-align: center;">导航页</h1>
  `;

  links.forEach(category => {
    html += `
      <div class="category">
        <h2>${category.name}</h2>
        <div class="links">
    `;
    category.bigFly.forEach(link => {
      html += `
        <a class="link" href="${link.url}" target="_blank">${link.name}</a>
      `;
    });
    html += `
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </body>
    </html>
  `;

  return html;
}