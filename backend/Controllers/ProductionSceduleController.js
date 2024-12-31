const { getProductionSchedule } = require('../Model/ProductionSceduleModel');

const fetchProductionSchedule = async (req, res) => {
  try {
    const schedule = await getProductionSchedule();
    res.json(schedule);
  } catch (err) {
    console.error('Error fetching production schedule:', err);
    res.status(500).json({ error: 'Failed to fetch production schedule.', details: err });
  }
};

module.exports = { fetchProductionSchedule };
