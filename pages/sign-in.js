import CustomLoadingButton from "@/src/components/Custom Button Loading";
import CustomField from "@/src/components/Custom Field";
import CustomFieldWithShowPass from "@/src/components/Custom Field showPass";
import { Box, Button, IconButton } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const resp = await axios.post(`api/auth/sign-in`, user);
          if (resp.data.success) {
            localStorage.setItem("token", resp.data.token);
            router.push("/");
          }
          resolve();
        } catch (error) {
          reject(error.response.data.message);
        }
      }),
      {
        loading: "מתחבר...",
        success: "התחברות בוצעה בהצלחה בהצלחה !",
        error: (err) => {
          return err;
        },
      }
    );
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '972507255889';
    const message = encodeURIComponent('היי, אשמח לשמוע עוד פרטים על הקורס ! ☺️');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>DVF - קורס עריכת וידאו בכדורגל - התחברות</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ textAlign: "center", padding: "3rem" }}>
        <h1 style={{ color: "#ffa22d" }}>התחברות למשתמש</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: { md: "30%", xs: "100%" }, margin: "auto" }}
        >
          <CustomField
            required
            value={user.email || ""}
            label="דואר אלקטרוני"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            fullWidth
          />
          <CustomFieldWithShowPass
            required
            value={user.password || ""}
            label="סיסמה"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            fullWidth
          />
          <Link
            href="sign-up"
            style={{
              color: "#FFFF",
              textDecoration: "none",
              float: "right",
              margin: "0.5rem",
            }}
          >
            משתמש חדש? לחץ כאן
          </Link>
          <CustomLoadingButton
            loading={loading}
            type="submit"
            value="התחברות"
            width="100%"
          />
        </Box>
        <p style={{ color: "#FFFF" }}>
          רוצה להצטרף לקורס ? אנא פנה אליי בפרטים לפרטים נוספים
        </p>
        <Box>
          <IconButton
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon sx={{ color: "#25D366" }} />
          </IconButton>
          <IconButton
            component="a"
            href="tel:0507255889"
            target="_blank"
          >
            <PhoneEnabledIcon sx={{ color: "#ffa22d" }} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:DanielMaximov2@gmail.com"
            target="_blank"
          >
            <EmailIcon sx={{ color: "#ffff" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Login;
