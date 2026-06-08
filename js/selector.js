// ========================================
// SUPABASE CONFIG
// ========================================
const SUPABASE_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
const EVENTO_SLUG   = 'xv-estrella-naomi';
const SB_HEADERS    = { 'apikey': SUPABASE_ANON, 'Authorization': `Bearer ${SUPABASE_ANON}`, 'Content-Type': 'application/json' };

function getSessionId() {
    const KEY = 'foro7_sid';
    let sid = localStorage.getItem(KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(KEY, sid); }
    return sid;
}
const SESSION_ID = getSessionId();
let eventoIdCache = null;
let sbDisponible  = true;

async function sbGetEventoId() {
    if (eventoIdCache) return eventoIdCache;
    const r = await fetch(`${SUPABASE_URL}/rest/v1/eventos?slug=eq.${EVENTO_SLUG}&select=id&limit=1`, { headers: SB_HEADERS });
    const [ev] = await r.json();
    eventoIdCache = ev?.id || null;
    return eventoIdCache;
}

async function sbRegistrarVisita(pagina = 'selector') {
    try {
        const evento_id = await sbGetEventoId();
        if (!evento_id) return;
        await fetch(`${SUPABASE_URL}/rest/v1/visitas`, {
            method: 'POST',
            headers: { ...SB_HEADERS, 'Prefer': 'return=minimal' },
            body: JSON.stringify({ evento_id, pagina, session_id: SESSION_ID })
        });
    } catch(e) {}
}

// ========================================
// GLOBAL VARIABLES - XV Años Clara Susana
// ========================================
// Lista de fotos generada automáticamente
// Total: 1111 fotos
// Generado: 2026-03-29 03:11
const photos = [
    "imagenes/DSC_2776.webp","imagenes/DSC_2777.webp","imagenes/DSC_2778.webp","imagenes/DSC_2779.webp","imagenes/DSC_2780.webp",
    "imagenes/DSC_2781.webp","imagenes/DSC_2782.webp","imagenes/DSC_2783.webp","imagenes/DSC_2784.webp","imagenes/DSC_2785.webp",
    "imagenes/DSC_2786.webp","imagenes/DSC_2787.webp","imagenes/DSC_2788.webp","imagenes/DSC_2789.webp","imagenes/DSC_2790.webp",
    "imagenes/DSC_2791.webp","imagenes/DSC_2792.webp","imagenes/DSC_2793.webp","imagenes/DSC_2794.webp","imagenes/DSC_2795.webp",
    "imagenes/DSC_2796.webp","imagenes/DSC_2797.webp","imagenes/DSC_2798.webp","imagenes/DSC_2799.webp","imagenes/DSC_2800.webp",
    "imagenes/DSC_2801.webp","imagenes/DSC_2802.webp","imagenes/DSC_2803.webp","imagenes/DSC_2804.webp","imagenes/DSC_2805.webp",
    "imagenes/DSC_2806.webp","imagenes/DSC_2807.webp","imagenes/DSC_2808.webp","imagenes/DSC_2809.webp","imagenes/DSC_2810.webp",
    "imagenes/DSC_2811.webp","imagenes/DSC_2812.webp","imagenes/DSC_2813.webp","imagenes/DSC_2814.webp","imagenes/DSC_2815.webp",
    "imagenes/DSC_2816.webp","imagenes/DSC_2817.webp","imagenes/DSC_2818.webp","imagenes/DSC_2819.webp","imagenes/DSC_2820.webp",
    "imagenes/DSC_2821.webp","imagenes/DSC_2822.webp","imagenes/DSC_2823.webp","imagenes/DSC_2824.webp","imagenes/DSC_2825.webp",
    "imagenes/DSC_2826.webp","imagenes/DSC_2827.webp","imagenes/DSC_2828.webp","imagenes/DSC_2829.webp","imagenes/DSC_2830.webp",
    "imagenes/DSC_2831.webp","imagenes/DSC_2832.webp","imagenes/DSC_2833.webp","imagenes/DSC_2834.webp","imagenes/DSC_2835.webp",
    "imagenes/DSC_2836.webp","imagenes/DSC_2837.webp","imagenes/DSC_2838.webp","imagenes/DSC_2839.webp","imagenes/DSC_2840.webp",
    "imagenes/DSC_2841.webp","imagenes/DSC_2842.webp","imagenes/DSC_2843.webp","imagenes/DSC_2844.webp","imagenes/DSC_2845.webp",
    "imagenes/DSC_2846.webp","imagenes/DSC_2847.webp","imagenes/DSC_2848.webp","imagenes/DSC_2849.webp","imagenes/DSC_2850.webp",
    "imagenes/DSC_2851.webp","imagenes/DSC_2852.webp","imagenes/DSC_2853.webp","imagenes/DSC_2854.webp","imagenes/DSC_2855.webp",
    "imagenes/DSC_2856.webp","imagenes/DSC_2857.webp","imagenes/DSC_2858.webp","imagenes/DSC_2859.webp","imagenes/DSC_2860.webp",
    "imagenes/DSC_2861.webp","imagenes/DSC_2862.webp","imagenes/DSC_2863.webp","imagenes/DSC_2864.webp","imagenes/DSC_2865.webp",
    "imagenes/DSC_2866.webp","imagenes/DSC_2867.webp","imagenes/DSC_2868.webp","imagenes/DSC_2869.webp","imagenes/DSC_2870.webp",
    "imagenes/DSC_2871.webp","imagenes/DSC_2872.webp","imagenes/DSC_2873.webp","imagenes/DSC_2874.webp","imagenes/DSC_2875.webp",
    "imagenes/DSC_2876.webp","imagenes/DSC_2877.webp","imagenes/DSC_2878.webp","imagenes/DSC_2879.webp","imagenes/DSC_2880.webp",
    "imagenes/DSC_2881.webp","imagenes/DSC_2882.webp","imagenes/DSC_2883.webp","imagenes/DSC_2884.webp","imagenes/DSC_2885.webp",
    "imagenes/DSC_2886.webp","imagenes/DSC_2887.webp","imagenes/DSC_2888.webp","imagenes/DSC_2889.webp","imagenes/DSC_2890.webp",
    "imagenes/DSC_2891.webp","imagenes/DSC_2892.webp","imagenes/DSC_2893.webp","imagenes/DSC_2894.webp","imagenes/DSC_2895.webp",
    "imagenes/DSC_2896.webp","imagenes/DSC_2897.webp","imagenes/DSC_2898.webp","imagenes/DSC_2899.webp","imagenes/DSC_2900.webp",
    "imagenes/DSC_2901.webp","imagenes/DSC_2902.webp","imagenes/DSC_2903.webp","imagenes/DSC_2904.webp","imagenes/DSC_3919.webp",
    "imagenes/DSC_3920.webp","imagenes/DSC_3921.webp","imagenes/DSC_3922.webp","imagenes/DSC_3923.webp","imagenes/DSC_3924.webp",
    "imagenes/DSC_3925.webp","imagenes/DSC_3926.webp","imagenes/DSC_3927.webp","imagenes/DSC_3928.webp","imagenes/DSC_3929.webp",
    "imagenes/DSC_3930.webp","imagenes/DSC_3931.webp","imagenes/DSC_3932.webp","imagenes/DSC_3933.webp","imagenes/DSC_3934.webp",
    "imagenes/DSC_3935.webp","imagenes/DSC_3936.webp","imagenes/DSC_3937.webp","imagenes/DSC_3938.webp","imagenes/DSC_3939.webp",
    "imagenes/DSC_3940.webp","imagenes/DSC_3941.webp","imagenes/DSC_3942.webp","imagenes/DSC_3943.webp","imagenes/DSC_3944.webp",
    "imagenes/DSC_3945.webp","imagenes/DSC_3946.webp","imagenes/DSC_3947.webp","imagenes/DSC_3948.webp","imagenes/DSC_3949.webp",
    "imagenes/DSC_3950.webp","imagenes/DSC_3951.webp","imagenes/DSC_3952.webp","imagenes/DSC_3953.webp","imagenes/DSC_3954.webp",
    "imagenes/DSC_3955.webp","imagenes/DSC_3956.webp","imagenes/DSC_3957.webp","imagenes/DSC_3958.webp","imagenes/DSC_3959.webp",
    "imagenes/DSC_3960.webp","imagenes/DSC_3961.webp","imagenes/DSC_3962.webp","imagenes/DSC_3963.webp","imagenes/DSC_3964.webp",
    "imagenes/DSC_3965.webp","imagenes/DSC_3966.webp","imagenes/DSC_3967.webp","imagenes/DSC_3968.webp","imagenes/DSC_3969.webp",
    "imagenes/DSC_3970.webp","imagenes/DSC_3971.webp","imagenes/DSC_3972.webp","imagenes/DSC_3973.webp","imagenes/DSC_3974.webp",
    "imagenes/DSC_3975.webp","imagenes/DSC_3976.webp","imagenes/DSC_3977.webp","imagenes/DSC_3978.webp","imagenes/DSC_3979.webp",
    "imagenes/DSC_3980.webp","imagenes/DSC_3981.webp","imagenes/DSC_3982.webp","imagenes/DSC_3983.webp","imagenes/DSC_3984.webp",
    "imagenes/DSC_3985.webp","imagenes/DSC_3986.webp","imagenes/DSC_3987.webp","imagenes/DSC_3988.webp","imagenes/DSC_3989.webp",
    "imagenes/DSC_3990.webp","imagenes/DSC_3991.webp","imagenes/DSC_3992.webp","imagenes/DSC_3993.webp","imagenes/DSC_3994.webp",
    "imagenes/DSC_3995.webp","imagenes/DSC_3996.webp","imagenes/DSC_3997.webp","imagenes/DSC_3998.webp","imagenes/DSC_3999.webp",
    "imagenes/DSC_4000.webp","imagenes/DSC_4001.webp","imagenes/DSC_4002.webp","imagenes/DSC_4003.webp","imagenes/DSC_4004.webp",
    "imagenes/DSC_4005.webp","imagenes/DSC_4006.webp","imagenes/DSC_4007.webp","imagenes/DSC_4009.webp","imagenes/DSC_4010.webp",
    "imagenes/DSC_4011.webp","imagenes/DSC_4012.webp","imagenes/DSC_4013.webp","imagenes/DSC_4014.webp","imagenes/DSC_4015.webp",
    "imagenes/DSC_4016.webp","imagenes/DSC_4017.webp","imagenes/DSC_4018.webp","imagenes/DSC_4019.webp","imagenes/DSC_4020.webp",
    "imagenes/DSC_4021.webp","imagenes/DSC_4022.webp","imagenes/DSC_4023.webp","imagenes/DSC_4024.webp","imagenes/DSC_4025.webp",
    "imagenes/DSC_4026.webp","imagenes/DSC_4027.webp","imagenes/DSC_4028.webp","imagenes/DSC_4029.webp","imagenes/DSC_4030.webp",
    "imagenes/DSC_4031.webp","imagenes/DSC_4032.webp","imagenes/DSC_4033.webp","imagenes/DSC_4034.webp","imagenes/DSC_4038.webp",
    "imagenes/DSC_4039.webp","imagenes/DSC_4040.webp","imagenes/DSC_4042.webp","imagenes/DSC_4043.webp","imagenes/DSC_4044.webp",
    "imagenes/DSC_4045.webp","imagenes/DSC_4046.webp","imagenes/DSC_4048.webp","imagenes/DSC_4049.webp","imagenes/DSC_4050.webp",
    "imagenes/DSC_4051.webp","imagenes/DSC_4052.webp","imagenes/DSC_4053.webp","imagenes/DSC_4054.webp","imagenes/DSC_4055.webp",
    "imagenes/DSC_4056.webp","imagenes/DSC_4057.webp","imagenes/DSC_4058.webp","imagenes/DSC_4059.webp","imagenes/DSC_4060.webp",
    "imagenes/DSC_4061.webp","imagenes/DSC_4062.webp","imagenes/DSC_4064.webp","imagenes/DSC_4065.webp","imagenes/DSC_4066.webp",
    "imagenes/DSC_4067.webp","imagenes/DSC_4069.webp","imagenes/DSC_4070.webp","imagenes/DSC_4071.webp","imagenes/DSC_4072.webp",
    "imagenes/DSC_4073.webp","imagenes/DSC_4074.webp","imagenes/DSC_4075.webp","imagenes/DSC_4076.webp","imagenes/DSC_4077.webp",
    "imagenes/DSC_4078.webp","imagenes/DSC_4079.webp","imagenes/DSC_4080.webp","imagenes/DSC_4081.webp","imagenes/DSC_4082.webp",
    "imagenes/DSC_4083.webp","imagenes/DSC_4084.webp","imagenes/DSC_4085.webp","imagenes/DSC_4086.webp","imagenes/DSC_4087.webp",
    "imagenes/DSC_4088.webp","imagenes/DSC_4089.webp","imagenes/DSC_4090.webp","imagenes/DSC_4091.webp","imagenes/DSC_4092.webp",
    "imagenes/DSC_4093.webp","imagenes/DSC_4094.webp","imagenes/DSC_4095.webp","imagenes/DSC_4096.webp","imagenes/DSC_4097.webp",
    "imagenes/DSC_4098.webp","imagenes/DSC_4099.webp","imagenes/DSC_4100.webp","imagenes/DSC_4101.webp","imagenes/DSC_4102.webp",
    "imagenes/DSC_4103.webp","imagenes/DSC_4104.webp","imagenes/DSC_4105.webp","imagenes/DSC_4106.webp","imagenes/DSC_4107.webp",
    "imagenes/DSC_4108.webp","imagenes/DSC_4109.webp","imagenes/DSC_4110.webp","imagenes/DSC_4111.webp","imagenes/DSC_4112.webp",
    "imagenes/DSC_4113.webp","imagenes/DSC_4114.webp","imagenes/DSC_4115.webp","imagenes/DSC_4116.webp","imagenes/DSC_4117.webp",
    "imagenes/DSC_4118.webp","imagenes/DSC_4119.webp","imagenes/DSC_4120.webp","imagenes/DSC_4121.webp","imagenes/DSC_4122.webp",
    "imagenes/DSC_4123.webp","imagenes/DSC_4124.webp","imagenes/DSC_4125.webp","imagenes/DSC_4126.webp","imagenes/DSC_4127.webp",
    "imagenes/DSC_4128.webp","imagenes/DSC_4129.webp","imagenes/DSC_4130.webp","imagenes/DSC_4131.webp","imagenes/DSC_4132.webp",
    "imagenes/DSC_4133.webp","imagenes/DSC_4134.webp","imagenes/DSC_4135.webp","imagenes/DSC_4136.webp","imagenes/DSC_4137.webp",
    "imagenes/DSC_4138.webp","imagenes/DSC_4139.webp","imagenes/DSC_4140.webp","imagenes/DSC_4141.webp","imagenes/DSC_4142.webp",
    "imagenes/DSC_4143.webp","imagenes/DSC_4144.webp","imagenes/DSC_4145.webp","imagenes/DSC_4146.webp","imagenes/DSC_4147.webp",
    "imagenes/DSC_4148.webp","imagenes/DSC_4149.webp","imagenes/DSC_4150.webp","imagenes/DSC_4151.webp","imagenes/DSC_4152.webp",
    "imagenes/DSC_4153.webp","imagenes/DSC_4154.webp","imagenes/DSC_4155.webp","imagenes/DSC_4156.webp","imagenes/DSC_4157.webp",
    "imagenes/DSC_4158.webp","imagenes/DSC_4159.webp","imagenes/DSC_4160.webp","imagenes/DSC_4161.webp","imagenes/DSC_4162.webp",
    "imagenes/DSC_4163.webp","imagenes/DSC_4164.webp","imagenes/DSC_4165.webp","imagenes/DSC_4166.webp","imagenes/DSC_4167.webp",
    "imagenes/DSC_4168.webp","imagenes/DSC_4169.webp","imagenes/DSC_4170.webp","imagenes/DSC_4171.webp","imagenes/DSC_4172.webp",
    "imagenes/DSC_4173.webp","imagenes/DSC_4174.webp","imagenes/DSC_4175.webp","imagenes/DSC_4176.webp","imagenes/DSC_4177.webp",
    "imagenes/DSC_4178.webp","imagenes/DSC_4179.webp","imagenes/DSC_4180.webp","imagenes/DSC_4181.webp","imagenes/DSC_4182.webp",
    "imagenes/DSC_4183.webp","imagenes/DSC_4184.webp","imagenes/DSC_4185.webp","imagenes/DSC_4186.webp","imagenes/DSC_4187.webp",
    "imagenes/DSC_4188.webp","imagenes/DSC_4189.webp","imagenes/DSC_4190.webp","imagenes/DSC_4191.webp","imagenes/DSC_4192.webp",
    "imagenes/DSC_4193.webp","imagenes/DSC_4194.webp","imagenes/DSC_4195.webp","imagenes/DSC_4196.webp","imagenes/DSC_4197.webp",
    "imagenes/DSC_4198.webp","imagenes/DSC_4199.webp","imagenes/DSC_4200.webp","imagenes/DSC_4201.webp","imagenes/DSC_4202.webp",
    "imagenes/DSC_4203.webp","imagenes/DSC_4204.webp","imagenes/DSC_4205.webp","imagenes/DSC_4206.webp","imagenes/DSC_4207.webp",
    "imagenes/DSC_4208.webp","imagenes/DSC_4209.webp","imagenes/DSC_4210.webp","imagenes/DSC_4211.webp","imagenes/DSC_4212.webp",
    "imagenes/DSC_4213.webp","imagenes/DSC_4214.webp","imagenes/DSC_4215.webp","imagenes/DSC_4216.webp","imagenes/DSC_4217.webp",
    "imagenes/DSC_4218.webp","imagenes/DSC_4219.webp","imagenes/DSC_4220.webp","imagenes/DSC_4221.webp","imagenes/DSC_4222.webp",
    "imagenes/DSC_4223.webp","imagenes/DSC_4224.webp","imagenes/DSC_4225.webp","imagenes/DSC_4226.webp","imagenes/DSC_4227.webp",
    "imagenes/DSC_4228.webp","imagenes/DSC_4229.webp","imagenes/DSC_4230.webp","imagenes/DSC_4231.webp","imagenes/DSC_4232.webp",
    "imagenes/DSC_4233.webp","imagenes/DSC_4234.webp","imagenes/DSC_4235.webp","imagenes/DSC_4236.webp","imagenes/DSC_4237.webp",
    "imagenes/DSC_4238.webp","imagenes/DSC_4239.webp","imagenes/DSC_4240.webp","imagenes/DSC_4242.webp","imagenes/DSC_4243.webp",
    "imagenes/DSC_4244.webp","imagenes/DSC_4245.webp","imagenes/DSC_4246.webp","imagenes/DSC_4247.webp","imagenes/DSC_4248.webp",
    "imagenes/DSC_4249.webp","imagenes/DSC_4250.webp","imagenes/DSC_4251.webp","imagenes/DSC_4252.webp","imagenes/DSC_4253.webp",
    "imagenes/DSC_4254.webp","imagenes/DSC_4255.webp","imagenes/DSC_4256.webp","imagenes/DSC_4257.webp","imagenes/DSC_4258.webp",
    "imagenes/DSC_4259.webp","imagenes/DSC_4260.webp","imagenes/DSC_4261.webp","imagenes/DSC_4262.webp","imagenes/DSC_4263.webp",
    "imagenes/DSC_4264.webp","imagenes/DSC_4265.webp","imagenes/DSC_4266.webp","imagenes/DSC_4267.webp","imagenes/DSC_4268.webp",
    "imagenes/DSC_4269.webp","imagenes/DSC_4270.webp","imagenes/DSC_4272.webp","imagenes/DSC_4273.webp","imagenes/DSC_4274.webp",
    "imagenes/DSC_4275.webp","imagenes/DSC_4276.webp","imagenes/DSC_4277.webp","imagenes/DSC_4278.webp","imagenes/DSC_4279.webp",
    "imagenes/DSC_4280.webp","imagenes/DSC_4281.webp","imagenes/DSC_4282.webp","imagenes/DSC_4283.webp","imagenes/DSC_4284.webp",
    "imagenes/DSC_4285.webp","imagenes/DSC_4286.webp","imagenes/DSC_4287.webp","imagenes/DSC_4288.webp","imagenes/DSC_4289.webp",
    "imagenes/DSC_4290.webp","imagenes/DSC_4291.webp","imagenes/DSC_4292.webp","imagenes/DSC_4293.webp","imagenes/DSC_4294.webp",
    "imagenes/DSC_4295.webp","imagenes/DSC_4296.webp","imagenes/DSC_4297.webp","imagenes/DSC_4298.webp","imagenes/DSC_4299.webp",
    "imagenes/DSC_4300.webp","imagenes/DSC_4301.webp","imagenes/DSC_4302.webp","imagenes/DSC_4303.webp","imagenes/DSC_4304.webp",
    "imagenes/DSC_4305.webp","imagenes/DSC_4306.webp","imagenes/DSC_4308.webp","imagenes/DSC_4310.webp","imagenes/DSC_4311.webp",
    "imagenes/DSC_4312.webp","imagenes/DSC_4313.webp","imagenes/DSC_4315.webp","imagenes/DSC_4316.webp","imagenes/DSC_4317.webp",
    "imagenes/DSC_4318.webp","imagenes/DSC_4319.webp","imagenes/DSC_4320.webp","imagenes/DSC_4321.webp","imagenes/DSC_4322.webp",
    "imagenes/DSC_4323.webp","imagenes/DSC_4324.webp","imagenes/DSC_4325.webp","imagenes/DSC_4326.webp","imagenes/DSC_4327.webp",
    "imagenes/DSC_4328.webp","imagenes/DSC_4329.webp","imagenes/DSC_4330.webp","imagenes/DSC_4331.webp","imagenes/DSC_4332.webp",
    "imagenes/DSC_4333.webp","imagenes/DSC_4334.webp","imagenes/DSC_4335.webp","imagenes/DSC_4336.webp","imagenes/DSC_4337.webp",
    "imagenes/DSC_4338.webp","imagenes/DSC_4339.webp","imagenes/DSC_4340.webp","imagenes/DSC_4341.webp","imagenes/DSC_4342.webp",
    "imagenes/DSC_4343.webp","imagenes/DSC_4344.webp","imagenes/DSC_4345.webp","imagenes/DSC_4346.webp","imagenes/DSC_4347.webp",
    "imagenes/DSC_4348.webp","imagenes/DSC_4349.webp","imagenes/DSC_4350.webp","imagenes/DSC_4351.webp","imagenes/DSC_4352.webp",
    "imagenes/DSC_4353.webp","imagenes/DSC_4354.webp","imagenes/DSC_4355.webp","imagenes/DSC_4356.webp","imagenes/DSC_4357.webp",
    "imagenes/DSC_4358.webp","imagenes/DSC_4359.webp","imagenes/DSC_4360.webp","imagenes/DSC_4361.webp","imagenes/DSC_4362.webp",
    "imagenes/DSC_4363.webp","imagenes/DSC_4364.webp","imagenes/DSC_4365.webp","imagenes/DSC_4366.webp","imagenes/DSC_4367.webp",
    "imagenes/DSC_4368.webp","imagenes/DSC_4369.webp","imagenes/DSC_4370.webp","imagenes/DSC_4371.webp","imagenes/DSC_4372.webp",
    "imagenes/DSC_4373.webp","imagenes/DSC_4374.webp","imagenes/DSC_4375.webp","imagenes/DSC_4376.webp","imagenes/DSC_4377.webp",
    "imagenes/DSC_4378.webp","imagenes/DSC_4379.webp","imagenes/DSC_4380.webp","imagenes/DSC_4381.webp","imagenes/DSC_4382.webp",
    "imagenes/DSC_4383.webp","imagenes/DSC_4384.webp","imagenes/DSC_4385.webp","imagenes/DSC_4386.webp","imagenes/DSC_4387.webp",
    "imagenes/DSC_4388.webp","imagenes/DSC_4389.webp","imagenes/DSC_4390.webp","imagenes/DSC_4391.webp","imagenes/DSC_4392.webp",
    "imagenes/DSC_4393.webp","imagenes/DSC_4394.webp","imagenes/DSC_4395.webp","imagenes/DSC_4396.webp","imagenes/DSC_4397.webp",
    "imagenes/DSC_4398.webp","imagenes/DSC_4399.webp","imagenes/DSC_4400.webp","imagenes/DSC_4401.webp","imagenes/DSC_4402.webp",
    "imagenes/DSC_4403.webp","imagenes/DSC_4406.webp","imagenes/DSC_4407.webp","imagenes/DSC_4409.webp","imagenes/DSC_4410.webp",
    "imagenes/DSC_4411.webp","imagenes/DSC_4412.webp","imagenes/DSC_4413.webp","imagenes/DSC_4414.webp","imagenes/DSC_4415.webp",
    "imagenes/DSC_4416.webp","imagenes/DSC_4417.webp","imagenes/DSC_4418.webp","imagenes/DSC_4419.webp","imagenes/DSC_4420.webp",
    "imagenes/DSC_4421.webp","imagenes/DSC_4422.webp","imagenes/DSC_4423.webp","imagenes/DSC_4424.webp","imagenes/DSC_4425.webp",
    "imagenes/DSC_4428.webp","imagenes/DSC_4429.webp","imagenes/DSC_4430.webp","imagenes/DSC_4431.webp","imagenes/DSC_4432.webp",
    "imagenes/DSC_4433.webp","imagenes/DSC_4434.webp","imagenes/DSC_4435.webp","imagenes/DSC_4436.webp","imagenes/DSC_4437.webp",
    "imagenes/DSC_4438.webp","imagenes/DSC_4439.webp","imagenes/DSC_4440.webp","imagenes/DSC_4441.webp","imagenes/DSC_4442.webp",
    "imagenes/DSC_4443.webp","imagenes/DSC_4444.webp","imagenes/DSC_4445.webp","imagenes/DSC_4446.webp","imagenes/DSC_4447.webp",
    "imagenes/DSC_4448.webp","imagenes/DSC_4449.webp","imagenes/DSC_4450.webp","imagenes/DSC_4451.webp","imagenes/DSC_4452.webp",
    "imagenes/DSC_4453.webp","imagenes/DSC_4454.webp","imagenes/DSC_4455.webp","imagenes/DSC_4456.webp","imagenes/DSC_4457.webp",
    "imagenes/DSC_4458.webp","imagenes/DSC_4459.webp","imagenes/DSC_4460.webp","imagenes/DSC_4461.webp","imagenes/DSC_4462.webp",
    "imagenes/DSC_4463.webp","imagenes/DSC_4464.webp","imagenes/DSC_4465.webp","imagenes/DSC_4466.webp","imagenes/DSC_4467.webp",
    "imagenes/DSC_4468.webp","imagenes/DSC_4469.webp","imagenes/DSC_4470.webp","imagenes/DSC_4471.webp","imagenes/DSC_4472.webp",
    "imagenes/DSC_4473.webp","imagenes/DSC_4474.webp","imagenes/DSC_4475.webp","imagenes/DSC_4476.webp","imagenes/DSC_4477.webp",
    "imagenes/DSC_4478.webp","imagenes/DSC_4479.webp","imagenes/DSC_4480.webp","imagenes/DSC_4481.webp","imagenes/DSC_4482.webp",
    "imagenes/DSC_4483.webp","imagenes/DSC_4484.webp","imagenes/DSC_4485.webp","imagenes/DSC_4486.webp","imagenes/DSC_4487.webp",
    "imagenes/DSC_4488.webp","imagenes/DSC_4489.webp","imagenes/DSC_4490.webp","imagenes/DSC_4491.webp","imagenes/DSC_4492.webp",
    "imagenes/DSC_4493.webp","imagenes/DSC_4494.webp","imagenes/DSC_4495.webp","imagenes/DSC_4496.webp","imagenes/DSC_4497.webp",
    "imagenes/DSC_4498.webp","imagenes/DSC_4499.webp","imagenes/DSC_4500.webp","imagenes/DSC_4501.webp","imagenes/DSC_4502.webp",
    "imagenes/DSC_4503.webp","imagenes/DSC_4504.webp","imagenes/DSC_4505.webp","imagenes/DSC_4506.webp","imagenes/DSC_4507.webp",
    "imagenes/DSC_4508.webp","imagenes/DSC_4509.webp","imagenes/DSC_4510.webp","imagenes/DSC_4511.webp","imagenes/DSC_4512.webp",
    "imagenes/DSC_4513.webp","imagenes/DSC_4514.webp","imagenes/DSC_4515.webp","imagenes/DSC_4516.webp","imagenes/DSC_4517.webp",
    "imagenes/DSC_4518.webp","imagenes/DSC_4519.webp","imagenes/DSC_4520.webp","imagenes/DSC_4521.webp","imagenes/DSC_4522.webp",
    "imagenes/DSC_4523.webp","imagenes/DSC_4524.webp","imagenes/DSC_4525.webp","imagenes/DSC_4526.webp","imagenes/DSC_4527.webp",
    "imagenes/DSC_4528.webp","imagenes/DSC_4529.webp","imagenes/DSC_4530.webp","imagenes/DSC_4531.webp","imagenes/DSC_4532.webp",
    "imagenes/DSC_4533.webp","imagenes/DSC_4534.webp","imagenes/DSC_4535.webp","imagenes/DSC_4536.webp","imagenes/DSC_4537.webp",
    "imagenes/DSC_4538.webp","imagenes/DSC_4539.webp","imagenes/DSC_4540.webp","imagenes/DSC_4541.webp","imagenes/DSC_4542.webp",
    "imagenes/DSC_4543.webp","imagenes/DSC_4544.webp","imagenes/DSC_4545.webp","imagenes/DSC_4546.webp","imagenes/DSC_4547.webp",
    "imagenes/DSC_4548.webp","imagenes/DSC_4549.webp","imagenes/DSC_4550.webp","imagenes/DSC_4551.webp","imagenes/DSC_4552.webp",
    "imagenes/DSC_4553.webp","imagenes/DSC_4554.webp","imagenes/DSC_4555.webp","imagenes/DSC_4556.webp","imagenes/DSC_4557.webp",
    "imagenes/DSC_4558.webp","imagenes/DSC_4559.webp","imagenes/DSC_4560.webp","imagenes/DSC_4561.webp","imagenes/DSC_4562.webp",
    "imagenes/DSC_4563.webp","imagenes/DSC_4564.webp","imagenes/DSC_4565.webp","imagenes/DSC_4566.webp","imagenes/DSC_4567.webp",
    "imagenes/DSC_4568.webp","imagenes/DSC_4569.webp","imagenes/DSC_4570.webp","imagenes/DSC_4571.webp","imagenes/DSC_4572.webp",
    "imagenes/DSC_4573.webp","imagenes/DSC_4574.webp","imagenes/DSC_4575.webp","imagenes/DSC_4576.webp","imagenes/DSC_4577.webp",
    "imagenes/DSC_4578.webp","imagenes/DSC_4579.webp","imagenes/DSC_4580.webp","imagenes/DSC_4581.webp","imagenes/DSC_4582.webp",
    "imagenes/DSC_4583.webp","imagenes/DSC_4584.webp","imagenes/DSC_4585.webp","imagenes/DSC_4586.webp","imagenes/DSC_4587.webp",
    "imagenes/DSC_4588.webp","imagenes/DSC_4589.webp","imagenes/DSC_4590.webp","imagenes/DSC_4591.webp","imagenes/DSC_4592.webp",
    "imagenes/DSC_4593.webp","imagenes/DSC_4594.webp","imagenes/DSC_4595.webp","imagenes/DSC_4596.webp","imagenes/DSC_4597.webp",
    "imagenes/DSC_4598.webp","imagenes/DSC_4599.webp","imagenes/DSC_4600.webp","imagenes/DSC_4601.webp","imagenes/DSC_4602.webp",
    "imagenes/DSC_4603.webp","imagenes/DSC_4604.webp","imagenes/DSC_4605.webp","imagenes/DSC_4606.webp","imagenes/DSC_4607.webp",
    "imagenes/DSC_4608.webp","imagenes/DSC_4609.webp","imagenes/DSC_4610.webp","imagenes/DSC_4611.webp","imagenes/DSC_4612.webp",
    "imagenes/DSC_4613.webp","imagenes/DSC_4614.webp","imagenes/DSC_4615.webp","imagenes/DSC_4616.webp","imagenes/DSC_4617.webp",
    "imagenes/DSC_4618.webp","imagenes/DSC_4619.webp","imagenes/DSC_4620.webp","imagenes/DSC_4621.webp","imagenes/DSC_4622.webp",
    "imagenes/DSC_4623.webp","imagenes/DSC_4624.webp","imagenes/DSC_4625.webp","imagenes/DSC_4626.webp","imagenes/DSC_4627.webp",
    "imagenes/DSC_4628.webp","imagenes/DSC_4629.webp","imagenes/DSC_4630.webp","imagenes/DSC_4631.webp","imagenes/DSC_4632.webp",
    "imagenes/DSC_4633.webp","imagenes/DSC_4634.webp","imagenes/DSC_4635.webp","imagenes/DSC_4636.webp","imagenes/DSC_4637.webp",
    "imagenes/DSC_4638.webp","imagenes/DSC_4639.webp","imagenes/DSC_4640.webp","imagenes/DSC_4641.webp","imagenes/DSC_4642.webp",
    "imagenes/DSC_4643.webp","imagenes/DSC_4644.webp","imagenes/DSC_4645.webp","imagenes/DSC_4646.webp","imagenes/DSC_4647.webp",
    "imagenes/DSC_4648.webp","imagenes/DSC_4649.webp","imagenes/DSC_4650.webp","imagenes/DSC_4651.webp","imagenes/DSC_4652.webp",
    "imagenes/DSC_4653.webp","imagenes/DSC_4654.webp","imagenes/DSC_4655.webp","imagenes/DSC_4656.webp","imagenes/DSC_4657.webp",
    "imagenes/DSC_4658.webp","imagenes/DSC_4659.webp","imagenes/DSC_4660.webp","imagenes/DSC_4661.webp","imagenes/DSC_4662.webp",
    "imagenes/DSC_4663.webp","imagenes/DSC_4664.webp","imagenes/DSC_4665.webp","imagenes/DSC_4666.webp","imagenes/DSC_4667.webp",
    "imagenes/DSC_4668.webp","imagenes/DSC_4669.webp","imagenes/DSC_4670.webp","imagenes/DSC_4671.webp","imagenes/DSC_4672.webp",
    "imagenes/DSC_4673.webp","imagenes/DSC_4674.webp","imagenes/DSC_4675.webp","imagenes/DSC_4676.webp","imagenes/DSC_4677.webp",
    "imagenes/DSC_4678.webp","imagenes/DSC_4679.webp","imagenes/DSC_4680.webp","imagenes/DSC_4681.webp","imagenes/DSC_4682.webp",
    "imagenes/DSC_4683.webp","imagenes/DSC_4684.webp","imagenes/DSC_4685.webp","imagenes/DSC_4686.webp","imagenes/DSC_4687.webp",
    "imagenes/DSC_4688.webp","imagenes/DSC_4689.webp","imagenes/DSC_4690.webp","imagenes/DSC_4691.webp","imagenes/DSC_4692.webp",
    "imagenes/DSC_4693.webp","imagenes/DSC_4694.webp","imagenes/DSC_4695.webp","imagenes/DSC_4696.webp","imagenes/DSC_4697.webp",
    "imagenes/DSC_4698.webp","imagenes/DSC_4699.webp","imagenes/DSC_4700.webp","imagenes/DSC_4701.webp","imagenes/DSC_4702.webp",
    "imagenes/DSC_4703.webp","imagenes/DSC_4704.webp","imagenes/DSC_4705.webp","imagenes/DSC_4706.webp","imagenes/DSC_4707.webp",
    "imagenes/DSC_4708.webp","imagenes/DSC_4709.webp","imagenes/DSC_4710.webp","imagenes/DSC_4711.webp","imagenes/DSC_4712.webp",
    "imagenes/DSC_4713.webp","imagenes/DSC_4714.webp","imagenes/DSC_4715.webp","imagenes/DSC_4716.webp","imagenes/DSC_4717.webp",
    "imagenes/DSC_4718.webp","imagenes/DSC_4719.webp","imagenes/DSC_4720.webp","imagenes/DSC_4721.webp","imagenes/DSC_4722.webp",
    "imagenes/DSC_4723.webp","imagenes/DSC_4724.webp","imagenes/DSC_4725.webp","imagenes/DSC_4726.webp","imagenes/DSC_4727.webp",
    "imagenes/DSC_4728.webp","imagenes/DSC_4729.webp","imagenes/DSC_4730.webp","imagenes/DSC_4731.webp","imagenes/DSC_4732.webp",
    "imagenes/DSC_4733.webp","imagenes/DSC_4734.webp","imagenes/DSC_4735.webp","imagenes/DSC_4736.webp","imagenes/DSC_4737.webp",
    "imagenes/DSC_4738.webp","imagenes/DSC_4739.webp","imagenes/DSC_4740.webp","imagenes/DSC_4741.webp","imagenes/DSC_4742.webp",
    "imagenes/DSC_4743.webp","imagenes/DSC_4744.webp","imagenes/DSC_4745.webp","imagenes/DSC_4746.webp","imagenes/DSC_4747.webp",
    "imagenes/DSC_4748.webp","imagenes/DSC_4749.webp","imagenes/DSC_4750.webp","imagenes/DSC_4751.webp","imagenes/DSC_4752.webp",
    "imagenes/DSC_4753.webp","imagenes/DSC_4754.webp","imagenes/DSC_4755.webp","imagenes/DSC_4756.webp","imagenes/DSC_4757.webp",
    "imagenes/DSC_4758.webp","imagenes/DSC_4759.webp","imagenes/DSC_4760.webp","imagenes/DSC_4761.webp","imagenes/DSC_4762.webp",
    "imagenes/DSC_4763.webp","imagenes/DSC_4764.webp","imagenes/DSC_4765.webp","imagenes/DSC_4766.webp","imagenes/DSC_4767.webp",
    "imagenes/DSC_4768.webp","imagenes/DSC_4769.webp","imagenes/DSC_4770.webp","imagenes/DSC_4771.webp","imagenes/DSC_4772.webp",
    "imagenes/DSC_4773.webp","imagenes/DSC_4774.webp","imagenes/DSC_4775.webp","imagenes/DSC_4776.webp","imagenes/DSC_4777.webp",
    "imagenes/DSC_4778.webp","imagenes/DSC_4779.webp","imagenes/DSC_4780.webp","imagenes/DSC_4781.webp","imagenes/DSC_4782.webp",
    "imagenes/DSC_4783.webp","imagenes/DSC_4784.webp","imagenes/DSC_4785.webp","imagenes/DSC_4786.webp","imagenes/DSC_4787.webp",
    "imagenes/DSC_4788.webp","imagenes/DSC_4789.webp","imagenes/DSC_4790.webp","imagenes/DSC_4791.webp","imagenes/DSC_4792.webp",
    "imagenes/DSC_4793.webp","imagenes/DSC_4794.webp","imagenes/DSC_4795.webp","imagenes/DSC_4796.webp","imagenes/DSC_4797.webp",
    "imagenes/DSC_4798.webp","imagenes/DSC_4799.webp","imagenes/DSC_4800.webp","imagenes/DSC_4801.webp","imagenes/DSC_4802.webp",
    "imagenes/DSC_4803.webp","imagenes/DSC_4804.webp","imagenes/DSC_4805.webp","imagenes/DSC_4806.webp","imagenes/DSC_4807.webp",
    "imagenes/DSC_4809.webp","imagenes/DSC_4810.webp","imagenes/DSC_4811.webp","imagenes/DSC_4812.webp","imagenes/DSC_4813.webp",
    "imagenes/DSC_4814.webp","imagenes/DSC_4815.webp","imagenes/DSC_4816.webp","imagenes/DSC_4817.webp","imagenes/DSC_4818.webp",
    "imagenes/DSC_4819.webp","imagenes/DSC_4820.webp","imagenes/DSC_4821.webp","imagenes/DSC_4822.webp","imagenes/DSC_4823.webp",
    "imagenes/DSC_4824.webp","imagenes/DSC_4825.webp","imagenes/DSC_4826.webp","imagenes/DSC_4827.webp","imagenes/DSC_4828.webp",
    "imagenes/DSC_4829.webp","imagenes/DSC_4830.webp","imagenes/DSC_4831.webp","imagenes/DSC_4832.webp","imagenes/DSC_4833.webp",
    "imagenes/DSC_4834.webp","imagenes/DSC_4835.webp","imagenes/DSC_4836.webp","imagenes/DSC_4837.webp","imagenes/DSC_4838.webp",
    "imagenes/DSC_4839.webp","imagenes/DSC_4840.webp","imagenes/DSC_4841.webp","imagenes/DSC_4843.webp","imagenes/DSC_4844.webp",
    "imagenes/DSC_4845.webp","imagenes/DSC_4846.webp","imagenes/DSC_4847.webp","imagenes/DSC_4848.webp","imagenes/DSC_4849.webp",
    "imagenes/DSC_4850.webp","imagenes/DSC_4851.webp","imagenes/DSC_4852.webp","imagenes/DSC_4853.webp","imagenes/DSC_4854.webp",
    "imagenes/DSC_4855.webp","imagenes/DSC_4856.webp","imagenes/DSC_4857.webp","imagenes/DSC_4859.webp","imagenes/DSC_4860.webp",
    "imagenes/DSC_4861.webp","imagenes/DSC_4862.webp","imagenes/DSC_4863.webp","imagenes/DSC_4864.webp","imagenes/DSC_4865.webp",
    "imagenes/DSC_4866.webp","imagenes/DSC_4867.webp","imagenes/DSC_4868.webp","imagenes/DSC_4869.webp","imagenes/DSC_4870.webp",
    "imagenes/DSC_4871.webp","imagenes/DSC_4872.webp","imagenes/DSC_4873.webp","imagenes/DSC_4875.webp","imagenes/DSC_4876.webp",
    "imagenes/DSC_4877.webp","imagenes/DSC_4878.webp","imagenes/DSC_4879.webp","imagenes/DSC_4880.webp","imagenes/DSC_4881.webp",
    "imagenes/DSC_4889.webp","imagenes/DSC_4890.webp","imagenes/DSC_4891.webp","imagenes/DSC_4892.webp","imagenes/DSC_4893.webp",
    "imagenes/DSC_4894.webp","imagenes/DSC_4895.webp","imagenes/DSC_4896.webp","imagenes/DSC_4897.webp","imagenes/DSC_4898.webp",
    "imagenes/DSC_4899.webp","imagenes/DSC_4900.webp","imagenes/DSC_4901.webp","imagenes/DSC_4902.webp","imagenes/DSC_4903.webp",
    "imagenes/DSC_4904.webp","imagenes/DSC_4905.webp","imagenes/DSC_4906.webp","imagenes/DSC_4907.webp","imagenes/DSC_4908.webp",
    "imagenes/IMG_3451.webp","imagenes/IMG_3452.webp","imagenes/IMG_3453.webp","imagenes/IMG_3454.webp","imagenes/IMG_3455.webp",
    "imagenes/IMG_3456.webp","imagenes/IMG_3457.webp","imagenes/IMG_3458.webp","imagenes/IMG_3459.webp","imagenes/IMG_3460.webp",
    "imagenes/IMG_3461.webp","imagenes/IMG_3462.webp","imagenes/IMG_3463.webp","imagenes/IMG_3464.webp","imagenes/IMG_3465.webp",
    "imagenes/IMG_3466.webp","imagenes/IMG_3467.webp","imagenes/IMG_3470.webp","imagenes/IMG_3471.webp","imagenes/IMG_3472.webp",
    "imagenes/IMG_3473.webp"
];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}


// ── Configuración del evento ──
const CONFIG = {
    slug:               'xv-estrella-naomi',
    nombre:             (window.EVENT_CONFIG && window.EVENT_CONFIG.nombre)             || 'Clara Susana Palomares Torres',
    telefono:           (window.EVENT_CONFIG && window.EVENT_CONFIG.telefono)           || '',
    fechaEvento:        (window.EVENT_CONFIG && window.EVENT_CONFIG.fechaEvento)        || new Date(2026, 2, 28, 17, 0, 0),
    limiteImpresion:    200,
    limiteInvitacion:   null,
    costoFotoAdicional: (window.EVENT_CONFIG && window.EVENT_CONFIG.costoFotoAdicional) || 15,
};

const STORAGE_KEY = 'xv_anos_clara_susana_photo_selections';
const KEY_FILTER   = 'xv_filter';
const KEY_SCROLL   = 'xv_scroll';
const KEY_LAST     = 'xv_last_photo';
const LIMITES = {
    impresion: CONFIG.limiteImpresion,
    invitacion: CONFIG.limiteInvitacion
};
const COSTO_FOTO_ADICIONAL = CONFIG.costoFotoAdicional;

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
let touchStartX = 0;
let touchStartY = 0;
let scrollPositionBeforeModal = 0;
let scrollSaveTimer = null;
let modalOpen = false;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function mostrarBannerSinSeleccion() {
    if (document.getElementById('banner-sin-sel')) return;
    if (Object.keys(photoSelections).length > 0) return;
    if (CONFIG.fechaEvento > new Date()) return;
    const banner = document.createElement('div');
    banner.id = 'banner-sin-sel';
    banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
    banner.innerHTML = '📸 <strong>¡Tus fotos están listas!</strong> Aún no has seleccionado ninguna foto. ¡Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;font-size:.85rem;">×</button>';
    document.body.insertBefore(banner, document.body.firstChild);
}

async function loadSelections(isPoll = false) {
    if (!isPoll) {
        // Carga inicial: mostrar localStorage de inmediato (cero latencia)
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) photoSelections = JSON.parse(saved);
        } catch(e) { photoSelections = {}; }
    }

    if (!sbDisponible) return;
    try {
        const evento_id = await sbGetEventoId();
        if (!evento_id) { sbDisponible = false; return; }

        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&select=foto_index,impresion,invitacion,descartada`,
            { headers: SB_HEADERS }
        );
        if (!r.ok) throw new Error(r.status);
        const rows = await r.json();

        const sb = {};
        rows.forEach(row => {
            if (row.impresion || row.invitacion || row.descartada)
                sb[row.foto_index] = { impresion: row.impresion, invitacion: row.invitacion, descartada: row.descartada };
        });

        if (!isPoll) {
            // Carga inicial: merge y migrar localStorage a Supabase para que otros lo vean
            const merged = {...sb};
            Object.entries(photoSelections).forEach(([idx, sel]) => {
                if (sel.impresion || sel.invitacion || sel.descartada) merged[idx] = sel;
            });
            photoSelections = merged;
            if (Object.keys(photoSelections).length > 0) {
                sbSyncSelections().catch(e => console.warn('[Supabase] Migración:', e.message));
            }
            sbRegistrarVisita('selector');
            mostrarBannerSinSeleccion();
        } else {
            // Polling: Supabase es la verdad compartida, reemplaza estado local
            photoSelections = sb;
        }

        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections)); } catch(e) {}
        if (isPoll) {
            // Poll: solo actualizar tarjetas que cambiaron
            const oldSels = {};
            try { Object.assign(oldSels, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); } catch(e) {}
            const allIdx = new Set([...Object.keys(sb), ...Object.keys(oldSels)].map(Number));
            allIdx.forEach(idx => {
                if (JSON.stringify(oldSels[idx] || {}) !== JSON.stringify(sb[idx] || {})) updateCard(idx);
            });
            updateStats(); updateFilterButtons();
        } else {
            renderGallery(); setupLazyLoad(); updateStats(); updateFilterButtons();
        }
    } catch(e) {
        console.warn('[Supabase] Usando localStorage:', e.message);
        sbDisponible = false;
    }
}

async function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch(e) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (!sbDisponible) return;
    sbSyncSelections().catch(e => console.warn('[Supabase] Sync error:', e.message));
}

async function sbSyncSelections() {
    const snapshot = {...photoSelections}; // snapshot BEFORE any await
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;
    const rows = Object.entries(snapshot).map(([idx, sel]) => ({
        evento_id, session_id: SESSION_ID, foto_index: parseInt(idx),
        impresion: sel.impresion || false, invitacion: sel.invitacion || false, descartada: sel.descartada || false,
    }));
    if (rows.length === 0) return;
    await fetch(`${SUPABASE_URL}/rest/v1/selecciones?on_conflict=evento_id,foto_index`, {
        method: 'POST',
        headers: { ...SB_HEADERS, 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(rows)
    });
}

function swipeSaveAndNext() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        selectedCategories[btn.dataset.category] = btn.classList.contains('selected');
        if (btn.classList.contains('selected')) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        const idx = currentPhotoIndex;
        delete photoSelections[idx];
        if (sbDisponible) sbDeleteSelection(idx).catch(e => console.warn('[Supabase] Delete:', e.message));
    }
    saveSelections();
    updateCard(currentPhotoIndex);
    updateStats();
    updateFilterButtons();
    navigatePhoto('next');
    showToast('Guardado ✓', 'success');
}

function swipeClearAndNext() {
    if (currentPhotoIndex === null) return;
    const idx = currentPhotoIndex;
    if (photoSelections[idx]) {
        delete photoSelections[idx];
        if (sbDisponible) sbDeleteSelection(idx).catch(e => console.warn('[Supabase] Delete:', e.message));
        saveSelections();
        updateCard(idx);
        updateStats();
        updateFilterButtons();
    }
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    navigatePhoto('next');
    showToast('Selección quitada', 'success');
}

async function sbDeleteSelection(foto_index) {
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;
    await fetch(
        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&foto_index=eq.${foto_index}`,
        { method: 'DELETE', headers: SB_HEADERS }
    );
}

async function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        // Borrar de Supabase primero
        if (sbDisponible) {
            try {
                const evento_id = await sbGetEventoId();
                if (evento_id) {
                    await fetch(
                        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}`,
                        { method: 'DELETE', headers: SB_HEADERS }
                    );
                }
            } catch(e) { console.warn('[Supabase] Error al borrar:', e.message); }
        }
        photoSelections = {};
        try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
        renderGallery();
        setupLazyLoad();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const extraCostDisplay = document.getElementById('extraCostDisplay');
    if (extraCostDisplay) {
        if (fotosAdicionales > 0) {
            extraCostDisplay.style.display = 'block';
            document.getElementById('extraCostAmount').textContent = `$${costoExtra} MXN`;
            document.getElementById('extraCostDetail').textContent = `${fotosAdicionales} foto${fotosAdicionales > 1 ? 's' : ''} adicional${fotosAdicionales > 1 ? 'es' : ''} x $${COSTO_FOTO_ADICIONAL}`;
        } else {
            extraCostDisplay.style.display = 'none';
        }
    }

    const impresionCard = document.querySelector('.stat-card.impresion');

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#ff9800';
            impresionCard.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">Las fotos estarán disponibles después del evento (28 de marzo de 2026)</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img data-src="${photo}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E" alt="${displayNumber}" class="lazy-img">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// LAZY LOADER CON COLA (máx 4 concurrentes — evita throttle de GitHub en iOS)
// ========================================
let lazyObserver = null;
let lazyQueue = [];
let lazyActive = 0;
const LAZY_MAX = 4;

function lazyLoadNext() {
    while (lazyActive < LAZY_MAX && lazyQueue.length > 0) {
        const img = lazyQueue.shift();
        if (!img.dataset.src || img.classList.contains('lazy-loaded')) continue;
        lazyActive++;
        img.onload = img.onerror = () => { lazyActive--; lazyLoadNext(); };
        img.src = img.dataset.src;
        img.classList.add('lazy-loaded');
    }
}

function setupLazyLoad() {
    if (lazyObserver) lazyObserver.disconnect();
    lazyQueue = [];
    lazyActive = 0;

    lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                lazyObserver.unobserve(img);
                if (!img.classList.contains('lazy-loaded')) {
                    lazyQueue.push(img);
                    lazyLoadNext();
                }
            }
        });
    }, { rootMargin: '300px 0px' });

    document.querySelectorAll('img.lazy-img:not(.lazy-loaded)').forEach(img => {
        lazyObserver.observe(img);
    });
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    try { localStorage.setItem(KEY_FILTER, filter); } catch (e) {}
}

function updateFilterButtons() {
    const stats = getStats();

    const btnAll = document.getElementById('btnFilterAll');
    const btnImpresion = document.getElementById('btnFilterImpresion');
    const btnInvitacion = document.getElementById('btnFilterInvitacion');
    const btnDescartada = document.getElementById('btnFilterDescartada');
    const btnSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnAll) btnAll.textContent = `Todas (${photos.length})`;
    if (btnImpresion) btnImpresion.textContent = `Impresión (${stats.impresion})`;
    if (btnInvitacion) btnInvitacion.textContent = `Invitación (${stats.invitacion})`;
    if (btnDescartada) btnDescartada.textContent = `Descartadas (${stats.descartada})`;
    if (btnSinClasificar) btnSinClasificar.textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ── Preload pool ──
const _preloadCache = new Map();
function _preloadImg(url) {
    if (_preloadCache.has(url)) return;
    const img = new Image();
    img.src = url;
    _preloadCache.set(url, img);
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    try { localStorage.setItem(KEY_LAST, index); } catch (e) {}
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    document.getElementById('modalImage').src = photo;
    document.getElementById('modalImage').alt = displayNumber;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();

    modalOpen = true;
    document.body.style.overflow = 'hidden';

    // Precargar anterior y siguiente
    const next = photos[(index + 1) % photos.length];
    const prev = photos[(index - 1 + photos.length) % photos.length];
    setTimeout(() => { _preloadImg(next); _preloadImg(prev); }, 50);
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');

    document.body.style.overflow = '';
    modalOpen = false;

    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function updateCard(index) {
    const card = document.querySelector(`.photo-card[data-index="${index}"]`);
    if (!card) return;

    const selection = photoSelections[index] || {};
    const hasAny = selection.impresion || selection.invitacion || selection.descartada;

    // Recalcular clases de color
    card.className = 'photo-card';
    if (selection.descartada) {
        card.classList.add('has-descartada');
    } else {
        const cats = [];
        if (selection.impresion) cats.push('impresion');
        if (selection.invitacion) cats.push('invitacion');
        if (cats.length > 1) card.classList.add('has-multiple');
        else if (cats.length === 1) card.classList.add(`has-${cats[0]}`);
    }

    // Actualizar badges sin tocar el <img>
    const existing = card.querySelector('.photo-badges');
    if (existing) existing.remove();
    if (hasAny) {
        const badges = document.createElement('div');
        badges.className = 'photo-badges';
        if (selection.impresion) badges.innerHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
        if (selection.invitacion) badges.innerHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
        if (selection.descartada) badges.innerHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
        card.appendChild(badges);
    }

    // Aplicar filtro actual
    let show = false;
    switch (currentFilter) {
        case 'all': show = true; break;
        case 'impresion': show = selection.impresion === true; break;
        case 'invitacion': show = selection.invitacion === true; break;
        case 'descartada': show = selection.descartada === true; break;
        case 'sin-clasificar': show = !selection.impresion && !selection.invitacion && !selection.descartada; break;
    }
    card.classList.toggle('hidden', !show);
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
        if (sbDisponible) sbDeleteSelection(currentPhotoIndex).catch(e => console.warn('[Supabase] Delete:', e.message));
    }

    saveSelections();
    updateCard(currentPhotoIndex);   // solo actualiza esa tarjeta, sin recargar imágenes
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const exportData = {
        evento: 'XV Años - Clara Susana Palomares Torres',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: stats,
        fotos_incluidas: LIMITES.impresion,
        fotos_adicionales: fotosAdicionales,
        costo_adicional: costoExtra,
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-clara-susana-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    let summary = '🎉 SELECCIÓN DE FOTOS - XV AÑOS CLARA SUSANA PALOMARES TORRES\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   📸 Impresión incluida: ${LIMITES.impresion} fotos\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos disponibles: ${photos.length}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ ADICIONALES' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    if (fotosAdicionales > 0) {
        summary += `💰 COSTO ADICIONAL:\n`;
        summary += `   Fotos adicionales: ${fotosAdicionales}\n`;
        summary += `   Costo por foto: $${COSTO_FOTO_ADICIONAL} MXN\n`;
        summary += `   TOTAL ADICIONAL: $${costoExtra} MXN\n\n`;
    }

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    setupLazyLoad();
    updateStats();
    updateFilterButtons();
    loadSelections();

    // Restaurar filtro y scroll de la sesión anterior
    const savedFilter = localStorage.getItem(KEY_FILTER);
    if (savedFilter) setFilter(savedFilter);
    const savedScroll = parseInt(localStorage.getItem(KEY_SCROLL) || '0');
    if (savedScroll > 0) {
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, savedScroll)));
    }

    // Filter buttons
    const btnFilterAll = document.getElementById('btnFilterAll');
    const btnFilterImpresion = document.getElementById('btnFilterImpresion');
    const btnFilterInvitacion = document.getElementById('btnFilterInvitacion');
    const btnFilterDescartada = document.getElementById('btnFilterDescartada');
    const btnFilterSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnFilterAll) btnFilterAll.addEventListener('click', () => setFilter('all'));
    if (btnFilterImpresion) btnFilterImpresion.addEventListener('click', () => setFilter('impresion'));
    if (btnFilterInvitacion) btnFilterInvitacion.addEventListener('click', () => setFilter('invitacion'));
    if (btnFilterDescartada) btnFilterDescartada.addEventListener('click', () => setFilter('descartada'));
    if (btnFilterSinClasificar) btnFilterSinClasificar.addEventListener('click', () => setFilter('sin-clasificar'));

    // Action buttons
    const btnExport = document.getElementById('btnExport');
    const btnShare = document.getElementById('btnShare');
    const btnClear = document.getElementById('btnClear');

    if (btnExport) btnExport.addEventListener('click', exportToJSON);
    if (btnShare) btnShare.addEventListener('click', copyToClipboard);
    if (btnClear) btnClear.addEventListener('click', clearAllSelections);

    // Modal controls
    const modalClose = document.querySelector('.modal-close');
    const btnCancelSelection = document.getElementById('btnCancelSelection');
    const btnSaveSelection = document.getElementById('btnSaveSelection');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (btnCancelSelection) btnCancelSelection.addEventListener('click', closeModal);
    if (btnSaveSelection) btnSaveSelection.addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click + swipe táctil para Android
    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target.id === 'photoModal') {
                closeModal();
            }
        });

        // Swipe: derecha = guardar selección + siguiente, izquierda = quitar + siguiente
        photoModal.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        photoModal.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) swipeSaveAndNext();
                else swipeClearAndNext();
            }
        }, { passive: true });
    }

    // Navigation buttons
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) btnPrevPhoto.addEventListener('click', () => navigatePhoto('prev'));
    if (btnNextPhoto) btnNextPhoto.addEventListener('click', () => navigatePhoto('next'));

    // Polling: sincronizar con otros usuarios cada 30 segundos
    if (sbDisponible) {
        setInterval(() => { if (!modalOpen) loadSelections(true); }, 30000);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

// Guardar scroll con debounce
window.addEventListener('scroll', () => {
    if (modalOpen) return;
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(() => {
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }, 300);
}, { passive: true });

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections();
    try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
});

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
