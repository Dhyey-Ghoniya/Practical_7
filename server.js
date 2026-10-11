const app = require('./src/app');

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Practical 7 Auth Server running on port ${PORT}`);
  console.log(` Student: Ghoniya Dhyey (24CS024) | ITUE301 AWDF`);
  console.log(`====================================================`);
});