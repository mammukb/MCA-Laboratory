
const contributorsContainer = document.getElementById("contributors-container");
fetch("https://api.github.com/repos/CET-MCA-26/MCA-Laboratory/contributors")
  .then((response) => response.json())
  .then((data) => {
    contributorsContainer.innerHTML = "";
    data.forEach((contributor) => {
      if (contributor.login === "jefintp") {
        return;
      }
      else if (contributor.login === "yadhukrishnx") {
        return; // Skip the iteration for "jefintp"
      }
      const contributorDiv = document.createElement("div");
      contributorDiv.className = "contributor";
      contributorDiv.innerHTML = `
                <img src="${contributor.avatar_url}" alt="${contributor.login}">
                <a href="${contributor.html_url}" target="_blank">${contributor.login}</a>
            `;
      contributorsContainer.appendChild(contributorDiv);
    });
  })
  .catch((error) => {
    contributorsContainer.innerHTML = "<p>Failed to load contributors.</p>";
    console.error("Error fetching contributors:", error);
  });

// leaderboard
const leaderboardTable = document
  .getElementById("leaderboard")
  .querySelector("tbody");

// Fetch contributors from the GitHub API
fetch("https://api.github.com/repos/CET-MCA-26/MCA-Laboratory/contributors")
  .then((response) => response.json())
  .then((data) => {
    // Sort contributors by contributions (highest first)
    data.sort((a, b) => b.contributions - a.contributions);

    // Clear the table body
    leaderboardTable.innerHTML = "";

    // Populate the leaderboard
    let rank = 1; // Separate counter for rank
    data.forEach((contributor) => {
      if (contributor.login === "jefintp") {
        return; // Skip the iteration for "jefintp"
      }
      else if (contributor.login === "yadhukrishnx") {
        return; // Skip the iteration for "jefintp"
      }
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${rank}</td> <!-- Use the separate rank counter -->
        <td>
            <img src="${contributor.avatar_url}" alt="${contributor.login}" class="contributor-img">
            <a href="${contributor.html_url}" target="_blank">${contributor.login}</a>
        </td>
        <td>${contributor.contributions}</td>
    `;
      leaderboardTable.appendChild(row);
      rank++; // Increment the rank counter only when adding a contributor
    });
  })
  .catch((error) => {
    leaderboardTable.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: red;">Failed to load data. Please try again later.</td>
            </tr>
        `;
    console.error("Error fetching contributors:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const pauseWhenNotActive = true;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake(snowflake) {
    const size = Math.random() * 5 + 1;
    const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
    const viewportHeight = window.innerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
    snowflake.style.top = `-${size}px`;

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationTimingFunction = "linear";
    snowflake.style.animationName =
      Math.random() < 0.5 ? "fall" : "diagonal-fall";

    setTimeout(() => {
      if (parseInt(snowflake.style.top, 10) < viewportHeight) {
        resetSnowflake(snowflake);
      } else {
        snowflake.remove(); // Remove when it goes off the bottom edge
      }
    }, animationDuration * 1000);
  }

  function createSnowflake() {
    if (snowflakes.length < maxSnowflakes) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflakes.push(snowflake);
      snowContainer.appendChild(snowflake);
      resetSnowflake(snowflake);
    }
  }

  function generateSnowflakes() {
    const numberOfParticles =
      Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
      particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    clearInterval(snowflakeInterval);
    snowflakeInterval = setInterval(() => {
      if (isTabActive && snowflakes.length < maxSnowflakes) {
        requestAnimationFrame(createSnowflake);
      }
    }, interval);
  }

  function handleVisibilityChange() {
    if (!pauseWhenNotActive) return;

    isTabActive = !document.hidden;
    if (isTabActive) {
      generateSnowflakes();
    } else {
      clearInterval(snowflakeInterval);
    }
  }

  generateSnowflakes();

  window.addEventListener("resize", () => {
    clearInterval(snowflakeInterval);
    setTimeout(generateSnowflakes, 1000);
  });

  document.addEventListener("visibilitychange", handleVisibilityChange);
});



// Edit 

function openModal(content) {
  let labContent = '';
  if (content === 'Python Lab Content') {
      labContent = `
          <h3>Python Programming Lab</h3>
          <h4>Lab Cycle</h4>
          <ul>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/01_area_perimeter_circle.py">Area and Perimeter of a Circle</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/02_swap2num.py">Swap 2 Numbers</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/03_Lof3.py">Largest of 3 numbers</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/04_ArithematicOps.py">Arithmetic Operations</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/05_firstn.py">First n Multiples</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/06_sumofeven.py">Sum of first 100 even numbers</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/07_factorial.py">Factorial</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/08_numofd.py">Number of digits</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/09_Leap.py">Leap year check</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/10_Rootsofquad.py">Roots of a quadratic equation</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/11_Stringechange.py">Exchange first and last characters in a string</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/12.list.py">Display first and last colours from a list</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/13.singlestring.py">Create a single string from two strings, swapping the character at position 1</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/14.dict.py">Sort dictionary (ascending and descending)</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/15.merge.py">Merge two dictionaries</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/16.GCD.py">GCD of 2 numbers</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/17.py">Remove all even numbers from a list</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/18.factorial.py">Factorial using function</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/19.fibinacci.py">Fibonacci series</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/20.charfreq.py">Character frequency in a string</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/21.IngorLy.py">Add 'ing' or 'ly' to a string</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/22.numbpyramid.py">Construct the pattern using nested loops</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/23.graphics.py">Graphics (Packages)</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/24.bank.py">Bank account (Constructor and Methods)</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/25.time.py">Time (Private attributes, Overloading)</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/26.book.py">Publisher, Book, Python (Base class constructor, method overriding)</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/27.oddlines.py">Copy odd lines of one file to another</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/28.readcsv.py">Read each row from a CSV file</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/29.readcols.py">Read specific columns from a CSV file</a></li>
              <li><a href="https://github.com/CET-MCA-26/MCA-Laboratory/edit/main/S1/PYTHON/30.dicttocsv.py">Write a Python dictionary to a CSV file</a></li>
          </ul>
      `;
  }
  document.getElementById('modal-body').innerHTML = labContent;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});