<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>"slls"1</li>
      <li>"slls"2</li>
      <li>"slls"3</li>
      <li>"slls"4</li>
      <li>"slls"5</li>
      <li>"slls"6</li>
      <li>"slls"7</li>
      <li>"slls"8</li>
      <li>"slls"9</li>
      <li>"slls"10</li>
      <li>"slls"11</li>
      <li>"slls"12</li>
      <li>"slls"13</li>
      <li>"slls"14</li>
      <li>"slls"15</li>
      <li>"slls"16</li>
      <li>"slls"17</li>
      <li>"slls"18</li>
      <li>"slls"19</li>
      <li>"slls"20</li>
      <li>"slls"21</li>
      <li>"slls"22</li>
      <li>"slls"23</li>
      <li>"slls"24</li>
      <li>"slls"25</li>
      <li>"slls"26</li>
      <li>"slls"27</li>
      <li>"slls"28</li>
      <li>"slls"29</li>
      <li>"slls"30</li>
      <li>"slls"31</li>
      <li>"slls"32</li>
      <li>"slls"33</li>
      <li>"slls"34</li>
      <li>"slls"35</li>
      <li>"slls"36</li>
      <li>"slls"37</li>
      <li>"slls"38</li>
      <li>"slls"39</li>
      <li>"slls"40</li>
      <li>"slls"41</li>
      <li>"slls"42</li>
      <li>"slls"43</li>
      <li>"slls"44</li>
      <li>"slls"45</li>
      <li>"slls"46</li>
      <li>"slls"47</li>
      <li>"slls"48</li>
      <li>"slls"49</li>
      <li>"slls"50</li>
      <li>"slls"51</li>
      <li>"slls"52</li>
      <li>"slls"53</li>
      <li>"slls"54</li>
      <li>"slls"55</li>
      <li>"slls"56</li>
      <li>"slls"57</li>
      <li>"slls"58</li>
      <li>"slls"59</li>
      <li>"slls"60</li>
      <li>"slls"61</li>
      <li>"slls"62</li>
      <li>"slls"63</li>
      <li>"slls"64</li>
      <li>"slls"65</li>
      <li>"slls"66</li>
      <li>"slls"67</li>
      <li>"slls"68</li>
      <li>"slls"69</li>
      <li>"slls"70</li>
      <li>"slls"71</li>
      <li>"slls"72</li>
      <li>"slls"73</li>
      <li>"slls"74</li>
      <li>"slls"75</li>
      <li>"slls"76</li>
      <li>"slls"77</li>
      <li>"slls"78</li>
      <li>"slls"79</li>
      <li>"slls"80</li>
      <li>"slls"81</li>
      <li>"slls"82</li>
      <li>"slls"83</li>
      <li>"slls"84</li>
      <li>"slls"85</li>
      <li>"slls"86</li>
      <li>"slls"87</li>
      <li>"slls"88</li>
      <li>"slls"89</li>
      <li>"slls"90</li>
      <li>"slls"91</li>
      <li>"slls"92</li>
      <li>"slls"93</li>
      <li>"slls"94</li>
      <li>"slls"95</li>
      <li>"slls"96</li>
      <li>"slls"97</li>
      <li>"slls"98</li>
      <li>"slls"99</li>
      <li>"slls"100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Category",
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{

      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 200px;
    overflow: hidden;
    background: red;
  }
</style>