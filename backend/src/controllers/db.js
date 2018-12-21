export default {

  async dbExecute(req, res) {
    try {
      return res.status(200).json({ text: 'test' });
    } catch (err) {

      return res.status(500).json({ error: err.message });
    }
  }
}
