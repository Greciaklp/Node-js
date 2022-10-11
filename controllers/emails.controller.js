import Email from "../models/Emails.js";

export async function agregarEmail(req, res) {
  try {
    const email= new Email(req.body);
    await email.save();
    res.status(201).json({ message: "Email agregado" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mesaage: error.message });
  }
};

export async function buscarEmail(req, res) {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mesaage: error.message });
  }
};


export async function encontrarEmailById(req, res) {
try {
  console.log(req.params.id);
  const email = await Email.findById(req.params.id);
  res.status(200).json(email);
} catch (error) {
  console.log(error.message);
  res.status(500).json({ mesaage: "Email no encontrado" });
}
};


export async function borrarEmail(req, res) {
  try {
    console.log("id" + req.params.id);
    const email = await Email.findByIdAndDelete(req.params.id);
    if (email === null) {
      throw new Error("El email no existe");
      console.log(email);
    }

    res.status(200).json({ mesaage: "email eliminado"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mesaage: "email no encontrado" });
  }
};

export async function actualizarEmail(req, res) {
  try {
    console.log(req.params.id);
    const email = await Email.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ mesaage: "Email actualizado", email });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({mesaage: "Email no encontrado"});
  }
};


